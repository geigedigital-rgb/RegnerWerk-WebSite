import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend";
import { sendTelegramLead } from "@/lib/telegram";
import { PRIVACY_NOTICE_VERSION } from "@/lib/content/consent";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string | null;
  email?: string | null;
  messages?: Array<{ role: string; content: string }>;
  landing_page?: string | null;
  referrer?: string | null;
  privacy_accepted?: boolean;
  company_website?: string | null;
  message?: string | null;
};

function clean(v: unknown, max = 2000) {
  return String(v ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true, reference: "RW-HONEYPOT", accepted: true });
  }

  if (body.privacy_accepted !== true) {
    return NextResponse.json(
      { error: "Bitte der Datenschutzerklärung zustimmen." },
      { status: 400 },
    );
  }

  const name = clean(body.name, 120) || "Website-Besucher";
  const phone = clean(body.phone, 60) || null;
  const email = clean(body.email, 200).toLowerCase() || null;

  if (!phone && !email) {
    return NextResponse.json(
      { error: "Telefon oder E-Mail erforderlich." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    phone,
    email,
    messages: body.messages ?? [],
    message: body.message ? clean(body.message, 500) : null,
    landing_page: clean(body.landing_page, 500) || "/",
    referrer: body.referrer ? clean(body.referrer, 500) : null,
    privacy_accepted: true as const,
    company_website: null,
  };

  const telegramOk = await sendTelegramLead({
    source: "Website · Support-Chat",
    name,
    email,
    phone,
    message: body.message ? clean(body.message, 500) : "Chat-Rückruf",
    extra: {
      Seite: payload.landing_page,
      Datenschutz: PRIVACY_NOTICE_VERSION,
      Nachrichten: String(body.messages?.length ?? 0),
    },
  });

  try {
    const res = await fetch(
      `${getBackendUrl()}/api/public/support-chat/handoff`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    const data = (await res.json().catch(() => ({}))) as {
      error?: string;
      reference?: string;
      accepted?: boolean;
    };
    if (!res.ok) {
      console.error("[support-chat/handoff] backend", res.status, data);
      if (telegramOk) {
        return NextResponse.json({ ok: true, reference: "TG", accepted: true });
      }
      return NextResponse.json(
        { error: data.error || "Senden fehlgeschlagen." },
        { status: 502 },
      );
    }
    return NextResponse.json({
      ok: true,
      reference: data.reference,
      accepted: data.accepted,
    });
  } catch (err) {
    console.error("[support-chat/handoff] unreachable", err);
    if (telegramOk) {
      return NextResponse.json({ ok: true, reference: "TG", accepted: true });
    }
    return NextResponse.json(
      { error: "Dienst vorübergehend nicht erreichbar." },
      { status: 503 },
    );
  }
}

import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend";
import { sendTelegramLead } from "@/lib/telegram";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
  gardenType?: string;
  contextTopic?: string;
  company_website?: string;
  landing_page?: string;
  referrer?: string;
  utm?: Record<string, string> | null;
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

  // Honeypot — silent success
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true, reference: "RW-HONEYPOT" });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 60);
  const location = clean(body.location, 200);
  const message = clean(body.message, 4000);
  const gardenType = clean(body.gardenType, 120);
  const contextTopic = clean(body.contextTopic, 120);

  if (name.length < 2) {
    return NextResponse.json({ error: "Name fehlt." }, { status: 400 });
  }
  if (!email.includes("@") || !email.includes(".")) {
    return NextResponse.json({ error: "E-Mail ungültig." }, { status: 400 });
  }

  const formType =
    /service|wartung/i.test(gardenType + contextTopic) ? "service" : "contact";

  const payload = {
    submission_id: randomUUID(),
    form_type: formType,
    name,
    email,
    phone: phone || null,
    address: location || null,
    postal_code: location.match(/\b(\d{5})\b/)?.[1] || null,
    message: message || null,
    garden_type: gardenType || null,
    privacy_notice_version: "2026-08-01",
    landing_page: clean(body.landing_page, 500) || "/kontakt/",
    referrer: body.referrer ? clean(body.referrer, 500) : null,
    utm: body.utm && typeof body.utm === "object" ? body.utm : null,
    callback_requested: true,
    callback_consent: true,
  };

  const telegramOk = await sendTelegramLead({
    source: formType === "service" ? "Website · Service" : "Website · Kontakt",
    name,
    email,
    phone: phone || null,
    message: message || null,
    extra: {
      Ort: location || null,
      Garten: gardenType || null,
      Thema: contextTopic || null,
    },
  });

  try {
    const res = await fetch(`${getBackendUrl()}/api/public/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      error?: string;
      reference?: string;
      accepted?: boolean;
    };
    if (!res.ok) {
      console.error("[contact] backend", res.status, data);
      if (telegramOk) {
        return NextResponse.json({
          ok: true,
          reference: "TG",
          accepted: true,
        });
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
    console.error("[contact] backend unreachable", err);
    if (telegramOk) {
      return NextResponse.json({
        ok: true,
        reference: "TG",
        accepted: true,
      });
    }
    return NextResponse.json(
      { error: "Dienst vorübergehend nicht erreichbar. Bitte später erneut." },
      { status: 503 },
    );
  }
}

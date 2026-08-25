import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend";
import { sendTelegramLead } from "@/lib/telegram";
import { PRIVACY_NOTICE_VERSION } from "@/lib/content/consent";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  gardenType?: string;
  company_website?: string;
  landing_page?: string;
  referrer?: string;
  utm?: Record<string, string> | null;
  privacyAccepted?: boolean;
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
    return NextResponse.json({ ok: true, id: "honeypot" });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 60);
  const message = clean(body.message, 4000);
  const gardenType = clean(body.gardenType, 120);

  if (name.length < 2) {
    return NextResponse.json({ error: "Name fehlt." }, { status: 400 });
  }
  if (!email.includes("@") || !email.includes(".")) {
    return NextResponse.json({ error: "E-Mail ungültig." }, { status: 400 });
  }
  if (body.privacyAccepted !== true) {
    return NextResponse.json(
      { error: "Bitte der Datenschutzerklärung zustimmen." },
      { status: 400 },
    );
  }

  const entry = {
    id: `pa_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    name,
    email,
    phone: phone || null,
    gardenType: gardenType || null,
    message: message || null,
    source: "projekt-anfragen",
  };

  // Local backup log (ephemeral on many hosts)
  try {
    const dir = path.join(process.cwd(), "data", "leads");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "projekt-anfragen.jsonl"),
      `${JSON.stringify(entry)}\n`,
      "utf8",
    );
  } catch (err) {
    console.error("[projekt-anfrage] write failed", err);
  }

  console.info("[projekt-anfrage]", JSON.stringify(entry));

  const telegramFallback = () =>
    sendTelegramLead({
      source: "Website · Projekt-Anfrage",
      name,
      email,
      phone: phone || null,
      message: message || null,
      extra: {
        Garten: gardenType || null,
        Datenschutz: PRIVACY_NOTICE_VERSION,
        Hinweis: "CRM offline — nur Telegram",
      },
    });

  // Forward to CRM Inbox (Telegram is sent by admin processPublicLead)
  let reference: string | undefined;
  try {
    const res = await fetch(`${getBackendUrl()}/api/public/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submission_id: randomUUID(),
        form_type: "projekt_anfrage",
        name,
        email,
        phone: phone || null,
        message: message || null,
        garden_type: gardenType || null,
        privacy_notice_version: PRIVACY_NOTICE_VERSION,
        landing_page: clean(body.landing_page, 500) || "/projekt-anfragen/",
        referrer: body.referrer ? clean(body.referrer, 500) : null,
        utm: body.utm && typeof body.utm === "object" ? body.utm : null,
        callback_requested: true,
        callback_consent: true,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as {
      reference?: string;
      error?: string;
    };
    if (!res.ok) {
      console.error("[projekt-anfrage] CRM forward failed", res.status, data);
      const telegramOk = await telegramFallback();
      if (telegramOk) {
        return NextResponse.json({ ok: true, id: entry.id, reference: "TG" });
      }
      return NextResponse.json(
        { error: data.error || "Senden fehlgeschlagen. Bitte später erneut." },
        { status: 502 },
      );
    }
    reference = data.reference;
  } catch (err) {
    console.error("[projekt-anfrage] CRM unreachable", err);
    const telegramOk = await telegramFallback();
    if (telegramOk) {
      return NextResponse.json({ ok: true, id: entry.id, reference: "TG" });
    }
    return NextResponse.json(
      { error: "Dienst vorübergehend nicht erreichbar. Bitte später erneut." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, id: entry.id, reference });
}

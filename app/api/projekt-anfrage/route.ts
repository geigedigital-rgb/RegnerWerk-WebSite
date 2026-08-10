import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  gardenType?: string;
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
    return NextResponse.json(
      { error: "Speichern fehlgeschlagen. Bitte später erneut." },
      { status: 500 },
    );
  }

  // Full JSON in Railway logs as backup (disk is ephemeral without a volume)
  console.info("[projekt-anfrage]", JSON.stringify(entry));

  return NextResponse.json({ ok: true, id: entry.id });
}

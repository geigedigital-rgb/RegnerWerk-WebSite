import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  try {
    const res = await fetch(`${getBackendUrl()}/api/public/support-chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: (data as { error?: string }).error || "Chat fehlgeschlagen." },
        { status: res.status >= 500 ? 502 : res.status },
      );
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error("[support-chat]", err);
    return NextResponse.json(
      { error: "Dienst vorübergehend nicht erreichbar." },
      { status: 503 },
    );
  }
}

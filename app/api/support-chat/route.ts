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

  const backend = getBackendUrl();
  try {
    const res = await fetch(`${backend}/api/public/support-chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("[support-chat] backend", backend, res.status, data);
      return NextResponse.json(
        {
          error:
            (data as { error?: string }).error ||
            (res.status === 404
              ? "Backend-URL zeigt nicht auf die Admin-App."
              : "Chat fehlgeschlagen."),
        },
        { status: res.status >= 500 ? 502 : res.status },
      );
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error("[support-chat] unreachable", backend, err);
    return NextResponse.json(
      { error: "Dienst vorübergehend nicht erreichbar." },
      { status: 503 },
    );
  }
}

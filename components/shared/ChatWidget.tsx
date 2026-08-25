"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { Loader2, MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { site, telHref } from "@/lib/site";

type ChatMsg = { role: "user" | "assistant"; content: string };

const WELCOME =
  "Hallo! Ich bin der digitale Assistent von RegnerWerk. Wie kann ich helfen — z. B. zu Neuanlage, Reparatur oder Wartung?";

export function ChatWidget() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needContact, setNeedContact] = useState(false);
  const [handoffDone, setHandoffDone] = useState<{ reference: string } | null>(
    null,
  );
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    privacy: false,
  });
  const bottomRef = useRef<HTMLDivElement>(null);
  const companyWebsite = useRef("");

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, needContact, handoffDone]);

  async function sendMessage(e?: FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    const next: ChatMsg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setError(null);

    try {
      const res = await fetch("/api/support-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
          landing_page:
            typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      const data = (await res.json()) as {
        reply?: string;
        need_contact?: boolean;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "Chat nicht erreichbar");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "…" },
      ]);
      if (data.need_contact) setNeedContact(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(false);
    }
  }

  async function submitHandoff(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (!contact.privacy) {
      setError("Bitte der Datenschutzerklärung zustimmen.");
      return;
    }
    if (!contact.phone.trim() && !contact.email.trim()) {
      setError("Telefon oder E-Mail angeben.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/support-chat/handoff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name.trim() || "Website-Besucher",
          phone: contact.phone.trim() || null,
          email: contact.email.trim() || null,
          messages,
          landing_page:
            typeof window !== "undefined" ? window.location.pathname : "/",
          referrer: typeof document !== "undefined" ? document.referrer : null,
          privacy_accepted: true,
          company_website: companyWebsite.current || null,
        }),
      });
      const data = (await res.json()) as {
        reference?: string;
        error?: string;
        accepted?: boolean;
      };
      if (!res.ok) throw new Error(data.error || "Senden fehlgeschlagen");
      setHandoffDone({ reference: data.reference || "OK" });
      setNeedContact(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-forest/10 bg-forest text-lime shadow-soft transition hover:scale-[1.02] lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="sr-only">{open ? "Chat schließen" : "Support-Chat öffnen"}</span>
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Support-Chat"
          className="fixed bottom-40 right-4 z-50 flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft lg:bottom-24 lg:right-6"
        >
          <div className="border-b border-gray-100 bg-forest px-4 py-3 text-white">
            <p className="text-sm font-semibold">{site.name} Support</p>
            <p className="text-xs text-white/70">KI-Assistent · Kurzantworten</p>
          </div>

          <div className="flex max-h-[min(55vh,22rem)] flex-col gap-2 overflow-y-auto bg-ice/40 p-3">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-2xl bg-forest px-3 py-2 text-sm text-white"
                    : "mr-6 rounded-2xl border border-gray-100 bg-white px-3 py-2 text-sm text-forest"
                }
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Tippt…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {handoffDone ? (
            <div className="space-y-2 border-t border-gray-100 p-3 text-sm text-gray-700">
              <p>
                Danke — wir melden uns. Referenz:{" "}
                <span className="font-medium text-forest">
                  {handoffDone.reference}
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Dringend?{" "}
                <a href={telHref()} className="text-aqua-deep underline">
                  {site.phone}
                </a>
              </p>
            </div>
          ) : needContact ? (
            <form
              onSubmit={(e) => void submitHandoff(e)}
              className="space-y-2 border-t border-gray-100 p-3"
            >
              <p className="text-xs text-gray-600">
                Kurz Kontaktdaten für Rückruf hinterlassen:
              </p>
              <input
                required
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={(e) =>
                  setContact((c) => ({ ...c, name: e.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              />
              <input
                name="phone"
                placeholder="Telefon"
                value={contact.phone}
                onChange={(e) =>
                  setContact((c) => ({ ...c, phone: e.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="E-Mail"
                value={contact.email}
                onChange={(e) =>
                  setContact((c) => ({ ...c, email: e.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              />
              {/* honeypot */}
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
                onChange={(e) => {
                  companyWebsite.current = e.target.value;
                }}
              />
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={contact.privacy}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, privacy: e.target.checked }))
                  }
                  className="mt-0.5"
                />
                <span>
                  Ich stimme der{" "}
                  <Link href="/datenschutz/" className="text-aqua-deep underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </span>
              </label>
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-full bg-lime py-2 text-sm font-semibold text-forest disabled:opacity-50"
              >
                Rückruf anfragen
              </button>
            </form>
          ) : (
            <form
              onSubmit={(e) => void sendMessage(e)}
              className="flex gap-2 border-t border-gray-100 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ihre Frage…"
                disabled={busy}
                className="min-w-0 flex-1 rounded-full border border-gray-200 px-3 py-2 text-sm outline-none focus:border-aqua-deep"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-lime disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          {error && (
            <p className="border-t border-red-100 bg-red-50 px-3 py-2 text-xs text-red-800">
              {error}
            </p>
          )}

          {!needContact && !handoffDone && (
            <button
              type="button"
              onClick={() => setNeedContact(true)}
              className="border-t border-gray-100 px-3 py-2 text-center text-xs text-aqua-deep hover:underline"
            >
              Mensch sprechen / Rückruf
            </button>
          )}
        </div>
      )}
    </>
  );
}

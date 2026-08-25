"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, Loader2, MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { site, telHref } from "@/lib/site";

type ChatMsg = { role: "user" | "assistant"; content: string };
type View = "chat" | "callback" | "done";

const WELCOME =
  "Hallo — ich bin der digitale Assistent von RegnerWerk. Wobei kann ich helfen?";

const fieldClass =
  "w-full rounded-2xl border border-gray-100 bg-ice px-3.5 py-2.5 text-[15px] leading-snug text-forest outline-none placeholder:text-gray-400 focus:border-aqua-deep";

export function ChatWidget() {
  const panelId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const companyWebsite = useRef("");

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("chat");
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    privacy: false,
  });

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, view, busy]);

  useEffect(() => {
    if (!open || view !== "chat") return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [open, view]);

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
      if (data.need_contact) setView("callback");
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
      };
      if (!res.ok) throw new Error(data.error || "Senden fehlgeschlagen");
      setReference(data.reference || "OK");
      setView("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(false);
    }
  }

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-lime shadow-soft transition hover:bg-forest-mid lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-5 w-5" strokeWidth={2} /> : <MessageCircle className="h-5 w-5" strokeWidth={2} />}
        <span className="sr-only">{open ? "Chat schließen" : "Chat öffnen"}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Support-Chat"
          className="fixed inset-x-3 bottom-[7.25rem] z-50 flex h-[min(72vh,36rem)] max-h-[calc(100dvh-9rem)] w-auto flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft sm:inset-x-auto sm:right-4 sm:bottom-40 sm:w-[24rem] lg:right-6 lg:bottom-24 lg:h-[min(74vh,38rem)]"
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-100 px-4 py-3.5">
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold tracking-tight text-forest">
                {site.name}
              </p>
              <p className="text-xs text-gray-400">Support · digitaler Assistent</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-50 hover:text-forest"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          {/* Body */}
          {view === "chat" ? (
            <>
              <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
                {messages.map((m, i) => (
                  <div
                    key={`${m.role}-${i}`}
                    className={
                      m.role === "user"
                        ? "ml-10 self-end rounded-2xl rounded-br-md bg-forest px-3.5 py-2.5 text-[15px] leading-relaxed text-white"
                        : "mr-6 self-start rounded-2xl rounded-bl-md bg-ice px-3.5 py-2.5 text-[15px] leading-relaxed text-forest"
                    }
                  >
                    {m.content}
                  </div>
                ))}
                {busy ? (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Antwortet…</span>
                  </div>
                ) : null}
                <div ref={bottomRef} />
              </div>

              <footer className="shrink-0 border-t border-gray-100 px-3 pb-3 pt-2">
                {error ? (
                  <p className="mb-2 px-1 text-xs leading-snug text-red-700">{error}</p>
                ) : null}
                <form onSubmit={(e) => void sendMessage(e)} className="flex items-end gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ihre Frage…"
                    disabled={busy}
                    className={`${fieldClass} flex-1`}
                  />
                  <button
                    type="submit"
                    disabled={busy || !input.trim()}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-forest transition hover:bg-lime-hover disabled:opacity-40"
                    aria-label="Senden"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setView("callback");
                  }}
                  className="mt-2 w-full py-1 text-center text-xs text-gray-400 transition hover:text-aqua-deep"
                >
                  Rückruf anfragen
                </button>
              </footer>
            </>
          ) : null}

          {view === "callback" ? (
            <form
              onSubmit={(e) => void submitHandoff(e)}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setView("chat");
                  }}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-forest"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Zurück zum Chat
                </button>
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-forest">
                    Rückruf
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Kurz Kontaktdaten hinterlassen — wir melden uns.
                  </p>
                </div>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={contact.name}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, name: e.target.value }))
                    }
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Telefon
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={contact.phone}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, phone: e.target.value }))
                    }
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    E-Mail
                  </span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, email: e.target.value }))
                    }
                    className={fieldClass}
                  />
                </label>
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                  onChange={(e) => {
                    companyWebsite.current = e.target.value;
                  }}
                />
                <label className="flex items-start gap-2.5 text-sm leading-snug text-gray-600">
                  <input
                    type="checkbox"
                    checked={contact.privacy}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, privacy: e.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 rounded border-gray-200"
                  />
                  <span>
                    Ich stimme der{" "}
                    <Link
                      href="/datenschutz/"
                      className="text-aqua-deep underline underline-offset-2"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    zu.
                  </span>
                </label>
                {error ? (
                  <p className="text-xs leading-snug text-red-700">{error}</p>
                ) : null}
              </div>
              <div className="shrink-0 border-t border-gray-100 p-3">
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-full bg-lime py-3 text-sm font-semibold text-forest transition hover:bg-lime-hover disabled:opacity-50"
                >
                  {busy ? "Senden…" : "Absenden"}
                </button>
              </div>
            </form>
          ) : null}

          {view === "done" ? (
            <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-8 text-center">
              <p className="text-base font-semibold tracking-tight text-forest">
                Danke — wir melden uns.
              </p>
              {reference ? (
                <p className="text-sm text-gray-600">
                  Referenz{" "}
                  <span className="font-medium text-forest">{reference}</span>
                </p>
              ) : null}
              <p className="text-sm text-gray-500">
                Dringend?{" "}
                <a
                  href={telHref()}
                  className="font-medium text-aqua-deep underline underline-offset-2"
                >
                  {site.phone}
                </a>
              </p>
              <button
                type="button"
                onClick={() => {
                  setView("chat");
                  setError(null);
                }}
                className="mx-auto mt-2 text-sm text-gray-400 hover:text-forest"
              >
                Weiter chatten
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

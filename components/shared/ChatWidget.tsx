"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, Loader2, MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { site, telHref } from "@/lib/site";

type ChatMsg = { role: "user" | "assistant"; content: string };
type View = "chat" | "callback" | "done";
type HandoffReason = "price" | "uncertain" | "request";

const WELCOME =
  "Hallo — womit kann ich helfen? Zum Beispiel neue Anlage, Reparatur oder eine kurze Frage zum Garten.";

const HANDOFF_COPY: Record<
  HandoffReason,
  { title: string; body: string; cta: string }
> = {
  price: {
    title: "Kein Festpreis im Chat",
    body: "Kosten hängen von Fläche, Wasser und Aufwand ab. Wenn Sie ein Angebot wollen, reicht ein kurzer Rückruf.",
    cta: "Kontaktdaten hinterlassen",
  },
  uncertain: {
    title: "Dazu brauchen wir mehr vom Objekt",
    body: "Im Chat fehlt oft Fläche, Wasser oder Lage. Das Team klärt das am Telefon schneller.",
    cta: "Rückruf vorbereiten",
  },
  request: {
    title: "Rückruf vorbereiten",
    body: "Gerne — hinterlassen Sie kurz Name und Telefon oder E-Mail. Wir melden uns.",
    cta: "Weiter zur Angabe",
  },
};

const fieldClass =
  "w-full rounded-xl border border-gray-100 bg-ice px-3 py-2 text-[13px] leading-snug text-forest outline-none placeholder:text-gray-400 focus:border-aqua-deep";

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
  const [offerCallback, setOfferCallback] = useState(false);
  const [handoffReason, setHandoffReason] =
    useState<HandoffReason>("uncertain");
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    privacy: false,
  });

  const handoffCopy = HANDOFF_COPY[handoffReason];

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
        handoff_reason?: HandoffReason | null;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "Chat nicht erreichbar");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "…" },
      ]);
      // Soft bridge only — never jump straight into the form.
      if (data.need_contact) {
        const reason = data.handoff_reason;
        setHandoffReason(
          reason === "price" || reason === "uncertain" || reason === "request"
            ? reason
            : "uncertain",
        );
        setOfferCallback(true);
      }
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
        className="fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lime shadow-soft transition hover:bg-forest-mid lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-5 w-5" strokeWidth={2} /> : <MessageCircle className="h-5 w-5" strokeWidth={2} />}
        <span className="sr-only">{open ? "Chat schließen" : "Chat öffnen"}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Support-Chat"
          className="fixed inset-x-3 bottom-[7.25rem] z-50 flex h-[min(62vh,28rem)] max-h-[calc(100dvh-9rem)] w-auto flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft sm:inset-x-auto sm:right-4 sm:bottom-36 sm:w-[20.5rem] lg:right-6 lg:bottom-24 lg:h-[min(64vh,30rem)]"
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 px-3 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-tight text-forest">
                {site.name}
              </p>
              <p className="text-[11px] text-gray-400">Support</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-50 hover:text-forest"
              aria-label="Schließen"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </header>

          {/* Body */}
          {view === "chat" ? (
            <>
              <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 py-3">
                {messages.map((m, i) => (
                  <div
                    key={`${m.role}-${i}`}
                    className={
                      m.role === "user"
                        ? "ml-8 self-end rounded-xl rounded-br-md bg-forest px-3 py-2 text-[13px] leading-snug text-white"
                        : "mr-5 self-start rounded-xl rounded-bl-md bg-ice px-3 py-2 text-[13px] leading-snug text-forest"
                    }
                  >
                    {m.content}
                  </div>
                ))}
                {busy ? (
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Antwortet…</span>
                  </div>
                ) : null}
                <div ref={bottomRef} />
              </div>

              <footer className="shrink-0 border-t border-gray-100 px-2.5 pb-2.5 pt-2">
                {error ? (
                  <p className="mb-1.5 px-1 text-[11px] leading-snug text-red-700">{error}</p>
                ) : null}
                {offerCallback ? (
                  <div className="mb-2 rounded-xl border border-gray-100 bg-mint/70 px-3 py-2">
                    <p className="text-[12px] font-semibold tracking-tight text-forest">
                      {handoffCopy.title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug text-gray-600">
                      {handoffCopy.body}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setError(null);
                          setOfferCallback(false);
                          setView("callback");
                        }}
                        className="rounded-full bg-lime px-3 py-1.5 text-[11px] font-semibold text-forest"
                      >
                        {handoffCopy.cta}
                      </button>
                      <button
                        type="button"
                        onClick={() => setOfferCallback(false)}
                        className="rounded-full px-2.5 py-1.5 text-[11px] text-gray-500 hover:text-forest"
                      >
                        Weiter fragen
                      </button>
                    </div>
                  </div>
                ) : null}
                <form onSubmit={(e) => void sendMessage(e)} className="flex items-end gap-1.5">
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
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-forest transition hover:bg-lime-hover disabled:opacity-40"
                    aria-label="Senden"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
                {!offerCallback ? (
                  <button
                    type="button"
                    onClick={() => {
                      setError(null);
                      setView("callback");
                    }}
                    className="mt-1 w-full py-0.5 text-center text-[11px] text-gray-400 transition hover:text-aqua-deep"
                  >
                    Rückruf anfragen
                  </button>
                ) : null}
              </footer>
            </>
          ) : null}

          {view === "callback" ? (
            <form
              onSubmit={(e) => void submitHandoff(e)}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-3 py-3">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setView("chat");
                  }}
                  className="inline-flex items-center gap-1 text-[12px] text-gray-500 transition hover:text-forest"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Zurück zum Chat
                </button>
                <div>
                  <h2 className="text-[13px] font-semibold tracking-tight text-forest">
                    {handoffCopy.title}
                  </h2>
                  <p className="mt-1 text-[12px] leading-snug text-gray-600">
                    {handoffCopy.body}
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
                <label className="flex items-start gap-2 text-[12px] leading-snug text-gray-600">
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
              <div className="shrink-0 border-t border-gray-100 p-2.5">
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-full bg-lime py-2 text-[13px] font-semibold text-forest transition hover:bg-lime-hover disabled:opacity-50"
                >
                  {busy ? "Senden…" : "Absenden"}
                </button>
              </div>
            </form>
          ) : null}

          {view === "done" ? (
            <div className="flex flex-1 flex-col justify-center gap-3 px-5 py-6 text-center">
              <p className="text-[13px] font-semibold tracking-tight text-forest">
                Danke — wir melden uns.
              </p>
              {reference ? (
                <p className="text-[12px] text-gray-600">
                  Referenz{" "}
                  <span className="font-medium text-forest">{reference}</span>
                </p>
              ) : null}
              <p className="text-[12px] text-gray-500">
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
                className="mx-auto mt-1 text-[12px] text-gray-400 hover:text-forest"
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

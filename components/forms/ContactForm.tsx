"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function ContactForm({
  defaultGardenType,
  defaultMessage,
  contextTopic,
  submitLabel = "Anfrage senden",
  compact = false,
}: {
  defaultGardenType?: string;
  defaultMessage?: string;
  contextTopic?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className={
        compact
          ? "relative space-y-3"
          : "relative space-y-4 rounded-3xl border border-gray-100 bg-white p-6 lg:p-8"
      }
      noValidate
      onFocus={() => {
        if (!started) {
          setStarted(true);
          track("form_start");
        }
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // Honeypot — bots filling hidden field are rejected silently.
        if (String(data.get("company_website") || "").trim()) {
          router.push("/anfrage-gesendet/");
          return;
        }
        const email = String(data.get("email") || "");
        if (!email.includes("@")) {
          setError("Bitte eine gültige E-Mail-Adresse angeben.");
          return;
        }
        setError(null);
        track("form_submit");
        router.push("/anfrage-gesendet/");
      }}
    >
      {/* Honeypot — visually hidden, not for users */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label>
          Website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      {contextTopic ? (
        <input type="hidden" name="contextTopic" value={contextTopic} />
      ) : null}

      <div
        className={`grid gap-3 sm:grid-cols-2 ${compact ? "" : "md:gap-4"}`}
      >
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="E-Mail"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
        <Field
          label="PLZ und Ort"
          name="location"
          required
          autoComplete="postal-code"
        />
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest">
          Art des Gartens
        </span>
        <select
          name="gardenType"
          className="w-full rounded-2xl border border-gray-100 bg-ice px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-lime"
          defaultValue={defaultGardenType || ""}
          required
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          <option>Rasen</option>
          <option>Rasen mit Beeten/Hecken</option>
          <option>Bestehender Garten (Nachrüstung)</option>
          <option>Neubau</option>
          <option>Service / Wartung</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest">
          {compact ? "Kurz Ihr Anliegen" : "Nachricht"}
        </span>
        <textarea
          name="message"
          required
          rows={compact ? 3 : 5}
          defaultValue={defaultMessage}
          placeholder={
            compact
              ? "Fläche grob, Neubau oder Bestand, Wunschtermin…"
              : undefined
          }
          className="w-full rounded-2xl border border-gray-100 bg-ice px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-lime"
        />
      </label>
      {!compact ? (
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-forest">
            Fotos oder Plan (optional)
          </span>
          <input
            type="file"
            name="files"
            accept="image/*,.pdf"
            multiple
            onChange={() => track("photo_upload")}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-mint file:px-4 file:py-2 file:text-sm file:font-semibold file:text-forest"
          />
        </label>
      ) : null}
      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          Ich stimme der Verarbeitung meiner Angaben gemäß{" "}
          <a href="/datenschutz/" className="text-aqua-deep underline">
            Datenschutzerklärung
          </a>{" "}
          zu.
        </span>
      </label>
      {error ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest">
        {label}
        {required ? "" : " (optional)"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-gray-100 bg-ice px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-lime"
      />
    </label>
  );
}

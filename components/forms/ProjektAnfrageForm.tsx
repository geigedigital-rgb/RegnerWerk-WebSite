"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type Status = "idle" | "loading" | "error";

export function ProjektAnfrageForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") || "").trim()) {
      router.push("/anfrage-gesendet/");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const gardenType = String(data.get("gardenType") || "").trim();

    if (!name || name.length < 2) {
      setError("Bitte Ihren Namen angeben.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Bitte eine gültige E-Mail-Adresse angeben.");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/projekt-anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, gardenType }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || "Senden fehlgeschlagen.");
      }
      track("projekt_anfrage_submit");
      router.push("/anfrage-gesendet/");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
      );
    }
  }

  return (
    <form
      className="relative space-y-5"
      noValidate
      onFocus={() => {
        if (!started) {
          setStarted(true);
          track("projekt_anfrage_start");
        }
      }}
      onSubmit={onSubmit}
    >
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

      <Field
        label="Name"
        name="name"
        required
        autoComplete="name"
        placeholder="Vor- und Nachname"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="E-Mail"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@beispiel.de"
        />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Optional"
        />
      </div>

      <div>
        <label
          htmlFor="gardenType"
          className="mb-1.5 block text-sm font-medium text-forest"
        >
          Was soll bewässert werden?
        </label>
        <select
          id="gardenType"
          name="gardenType"
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[0.9875rem] text-forest outline-none transition focus:border-aqua-deep focus:ring-2 focus:ring-aqua-deep/20"
          defaultValue=""
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          <option value="Rasen">Rasen</option>
          <option value="Beete und Hecken">Beete und Hecken</option>
          <option value="Rasen mit Beeten/Hecken">Rasen mit Beeten/Hecken</option>
          <option value="Sport- / Spielrasen">Sport- / Spielrasen</option>
          <option value="Bestehender Garten / Nachrüstung">
            Bestehender Garten / Nachrüstung
          </option>
          <option value="Noch unklar">Noch unklar</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-forest"
        >
          Kurzbeschreibung{" "}
          <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Fläche, Ort, besondere Wünsche – so kurz Sie möchten."
          className="w-full resize-y rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[0.9875rem] text-forest outline-none transition placeholder:text-gray-400 focus:border-aqua-deep focus:ring-2 focus:ring-aqua-deep/20"
        />
      </div>

      {error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Wird gesendet…" : "Anfrage senden"}
      </Button>
      <p className="text-xs leading-relaxed text-gray-500">
        Unverbindlich. Wir melden uns in der Regel innerhalb von 1–2 Werktagen.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-forest"
      >
        {label}
        {required ? <span className="text-aqua-deep"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[0.9875rem] text-forest outline-none transition placeholder:text-gray-400 focus:border-aqua-deep focus:ring-2 focus:ring-aqua-deep/20"
      />
    </div>
  );
}

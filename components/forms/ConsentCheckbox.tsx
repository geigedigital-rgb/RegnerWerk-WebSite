"use client";

export function ConsentCheckbox({ compact = false }: { compact?: boolean }) {
  return (
    <label
      className={`flex items-start gap-3 text-gray-600 ${
        compact ? "text-xs leading-snug" : "text-sm leading-snug"
      }`}
    >
      <input
        type="checkbox"
        name="privacy"
        required
        className="mt-1 h-4 w-4 shrink-0 accent-aqua-deep"
      />
      <span>
        Ich willige ein, dass RegnerWerk meine Angaben (Name, E-Mail, ggf.
        Telefon, Ort und Nachricht) zur Bearbeitung dieser Anfrage und zur
        Kontaktaufnahme per E-Mail, Telefon oder Nachricht verarbeitet. Die
        Kontaktaufnahme kann durch Mitarbeitende <em>oder KI-gestützte Systeme</em>{" "}
        erfolgen (Rückruf, Entgegennahme von Anrufen, Gesprächsführung). Die
        Einwilligung ist freiwillig und jederzeit mit Wirkung für die Zukunft
        widerrufbar (z.&nbsp;B. an hallo@regnerwerk.de). Weitere Informationen:{" "}
        <a href="/datenschutz/" className="font-semibold text-aqua-deep underline">
          Datenschutzerklärung
        </a>
        .
      </span>
    </label>
  );
}

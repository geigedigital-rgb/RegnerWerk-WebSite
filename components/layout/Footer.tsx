import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, legalNav } from "@/lib/content/nav";
import { site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-mid text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">
              Regner<span className="text-lime">Werk</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              {site.tagline} Für private Gärten in Deutschland – vom Wassercheck
              bis zur Nachjustierung.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-lime"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={telHref()}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Erreichbarkeit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>{site.hours}</li>
              <li>Sa: nach Vereinbarung</li>
              <li>So: geschlossen</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RegnerWerk. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

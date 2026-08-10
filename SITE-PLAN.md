# RegnerWerk Website — SITE-PLAN (living IA)

Source of truth for routes, build order, and content rules. Visual: `DESIGN.md`. Messaging: brand skill. SEO: `.cursor/skills/claude-seo/`.

## Decisions

- Market: **Deutschland** (nationwide)
- Primary CTA: **Garten berechnen** → `/garten-berechnen/` → configurator domain
- Content: file-based modules in `lib/content/*`
- Media / reviews: placeholders (`placeholder: true`) until real assets
- Local SEO stage: **16 Bundesländer** at `/[land]/bewaesserungsanlage-installieren/`
- No mass city doorway pages without real local projects
- Legal pages: structure only until approved copy

## Nav

Leistungen · Kosten · Projekte · Service · Über RegnerWerk  
CTA: Garten berechnen

## Stage 1 routes

| Path | Intent |
|------|--------|
| `/` | Company + calc |
| `/leistungen/` | Services overview |
| `/bewaesserungsanlage-installieren-lassen/` | Turnkey install |
| `/bewaesserung-bestehender-garten/` | Retrofit existing garden |
| `/rasenbewaesserung-installieren/` | Lawn irrigation |
| `/tropfbewaesserung-hecken-beete/` | Drip for beds/hedges |
| `/bewaesserungsanlage-kosten/` | Cost education |
| `/garten-berechnen/` | Calc explainer + handoff |
| `/projekte/`, `/projekte/[slug]` | Cases (placeholder OK) |
| `/service/` | Aftercare |
| `/ueber-regnerwerk/` | About |
| `/einsatzgebiet/` | Coverage + Länder links |
| `/kontakt/`, `/anfrage-gesendet/` | Contact |
| `/impressum/`, `/datenschutz/`, `/cookies/` | Legal shells |
| Advantage URLs (stage 2 content wired) | Trust mechanisms |
| `/[land]/bewaesserungsanlage-installieren/` × 16 | Bundesland SEO |

## Build order

Foundation → Home → Commercial → System → Advantages → Länder → SEO pass

## Content rules

- DE, calm, no unverified superlatives
- One primary query + one CTA per page
- Online calc = preliminary, not Festpreis
- FAQ unique per page

## Stage 1.5 — content depth (in progress / done)

- Media bands on commercial + advantage + Land pages
- `public/images/README.md` swap guide; registry in `lib/content/media.ts`
- Sticky mobile CTA; WebSite + Service + FAQ + Breadcrumb JSON-LD
- Expanded FAQs and visual blocks without inventing legal/NAP/real cases

## Stage 1.6 — UX / SEO plumbing

- Form honeypot + basic validation; Service page embeds form
- Skip-to-content; cookie banner offset above mobile sticky CTA
- Topic cluster internal links on home + Leistungen
- WebPage schema alongside Service/FAQ/Breadcrumb
- Deeper copy on Garten berechnen + Einsatzgebiet

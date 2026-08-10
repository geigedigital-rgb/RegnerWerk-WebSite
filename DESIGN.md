# RegnerWerk — Design System & Product Snapshot

**Единый слепок** для всех страниц и агентов. Источник правды по стилю, структуре и продуктовым решениям (главная + конфигуратор + правки по ходу).

Стек: Next.js App Router · TypeScript · Tailwind 4 · Framer Motion (минимум) · Lucide icons  
Язык UI: **DE** · Документация: **RU**

---

## 0. Суть бренда

RegnerWerk — **система автополива** (установка + продажа) для рынка Германии.

| Мы | Не мы |
|---|---|
| Невидимый smart-home utility | «Ещё один садовник» |
| Ясный заказ, прозрачный процесс | Хаос опций и хайп |
| Газон (forest) + вода (aqua) | Салатовый landscaping / royal blue |
| Soft premium SaaS 2026 | Карточки в hero, clutter, glow |

**Тон копира (DE):** спокойный, точный, короткий. Без восклицаний и «революций».

---

## 1. Цвета (токены в `app/globals.css`)

Смысл: **газон + вода + воздух**.

```css
--rw-forest:     #0B2414;   /* текст, dark-секции, структура */
--rw-forest-mid: #14352B;   /* footer, mid dark */
--rw-lime:       #00FFCF;   /* WATER accent / CTA — токен называется lime */
--rw-lime-hover: #00D9B0;
--rw-aqua-deep:  #0A9F86;   /* ссылки/мелкий акцент на белом (WCAG) */
--rw-mint:       #EAFCF7;   /* surface */
--rw-ice:        #F3FAFC;   /* cooler surface */
--rw-white:      #FFFFFF;
--rw-gray-50:    #F7FBFA;
--rw-gray-100:   #DDEAE6;
--rw-gray-400:   #7A948C;
--rw-gray-600:   #4D655C;
--rw-gold:       #E8B84A;   /* только звёзды рейтинга */
```

Tailwind: `forest`, `forest-mid`, `lime`, `lime-hover`, `aqua-deep`, `mint`, `ice`, `gold`.

### Правила контраста
- CTA: `bg-lime` + `text-forest`
- Мелкий текст на white: `forest` или `aqua-deep` — **никогда** `#00FFCF` как body text
- `#00FFCF` на white — только крупные акценты (кнопка, badge, иконка)
- Белый текст — только на forest / overlay ≥ ~60%

### Анти-цвета
- Grass-lime `#7AC41F` как primary (устарело)
- Purple / indigo gradients, cream `#F4F1EA` + terracotta, pure black, royal blue

---

## 2. Типографика

| Роль | Шрифт | Применение |
|---|---|---|
| UI / Display | **Plus Jakarta Sans** | всё тело сайта |
| Accent word | **Caveat** | ≤ 1 слово в H1/H2 на секцию |

- Base body: **17px** (`1.0625rem`), `line-height: 1.7`, tracking ≈ `-0.011em`
- H1: `clamp(1.9rem … 3.15rem)`, tracking `-0.025em`, leading ~1.12
- Section H2: `clamp(1.5–1.65rem … 2–2.5rem)`, bold, tracking `-0.02em`
- Lead / intro: `clamp(1.05–1.2rem)`, leading 1.65
- Мера строки: `.rw-measure` ≈ **40rem** (~65ch), без `mx-auto` — выравнивание влево
- Утилиты: `.rw-prose`, `.rw-lead`, `.rw-body`, `.rw-eyebrow`, `.rw-section`
- Caveat **не** для кнопок, форм, навигации

---

## 3. Форма, воздух, тени

| | |
|---|---|
| Кнопки / chips | `rounded-full` (pill) |
| Карточки / инпуты | `rounded-2xl`–`rounded-3xl` |
| Медиа / shell | `rounded-3xl` / `rounded-[2rem]` |
| Тени | По умолчанию **без** — только `border-gray-100`. Soft shadow — редко |
| Секции | `.rw-section` = `padding-block: clamp(3.5rem, 6vw, 5.5rem)` |
| Container | `max-w-7xl mx-auto` + gutters **`px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16`** |

**Правило из правок:** убирать лишние тени; глубина через border + фон (white / mint / forest).  
**Края:** не уже `px-5` на мобиле; на desktop щедрые боковые поля (`lg:px-12`+).  
**Текст:** длинные абзацы только в `.rw-measure` / `.rw-prose`, сетки и галереи — на полную ширину Container.

---

## 4. Компоненты UI (`components/ui/`)

| Компонент | Правило |
|---|---|
| **Button** | primary = aqua; ghost = outline на dark; dark = forest; без лишнего shadow (`!shadow-none` на e-com CTA) |
| **Card** | white + border; не в Hero |
| **SectionHeader** | eyebrow (`aqua-deep` / `lime` на dark) + H2 + optional Caveat + 1–2 строки description |
| **Tag / Pill** | active = lime; inactive = mint |
| **IconCircle** | Lucide, lime/mint fill |
| **FormField** | rounded-2xl, focus ring lime |
| **FadeIn** | умеренно; на Process / плотных блоках — без лишней анимации |
| **Container** | единая ширина |

Иконки: **lucide-react** (не emoji, не разнобой библиотек).

---

## 5. Главная — карта секций (актуальный порядок)

```
Hero → ProofBar → Services → ExistingGarden/Why → Process → Projekte
→ Kosten-Teaser → Testimonials → Region → FinalCTA → Footer
```

### Иерархия важности

**Primary:** Hero · Process · Kosten · Final CTA · Garten berechnen  
**Secondary:** Services · Why / bestehender Garten · Projekte · Testimonials  
**Tertiary:** Proof bar · Region / Länder  

### Правила по блокам

#### Hero
- Full-bleed фото сада/монтажа + forest overlay
- H1 из brand brief; CTAs: `Garten berechnen` / `Projekte ansehen`
- **Запрещено:** stats, chips, promo-карточки, shop-сетка в первом viewport

#### Packages / Kosten
- На главной — **teaser стоимости**, не e-com Fertigpaket как главный оффер
- Детали → `/bewaesserungsanlage-kosten/`

#### Process
- Dark forest, 6 шагов brief (berechnen → nachjustieren)

#### Projekte
- Карточки с Ort / m² / Zonen; placeholder-метка до реальных кейсов

---

## 6. Конфигуратор (второй домен)

На этом сайте **нет** `/konfigurator`. CTA ведёт на `/garten-berechnen/` (explainer), затем на `NEXT_PUBLIC_KONFIGURATOR_URL`.

Подробности планировщика — в репозитории configurator.
---

## 7. Motion

Разрешено:
- Лёгкий fade-up секций (`FadeIn`)
- CTA hover scale ~1.02
- Ticker marquee
- Respect `prefers-reduced-motion`

Запрещено / убрано по правкам:
- Float tag clouds
- Лишние анимации на Process
- Glow pulses, тяжёлый parallax

---

## 8. Иконография и медиа

- **Lucide** — единая библиотека; stroke ~1.75; размеры по контексту (18–28)
- Фото: газон, спринклеры, контроллеры, сад; full-bleed hero с forest overlay
- Логотип в круге Projekte: капля/mark aqua на forest, обводка white

---

## 9. Контент и продукт (DE)

| Решение | Значение |
|---|---|
| База Fertigpaket | ab **2.490 €** |
| Individuell floor | ≥ 2.490 € |
| Гарантия в коммуникации | 5 Jahre (конфигуратор / trust) |
| CTA главной Fertig | «Jetzt konfigurieren» → `/konfigurator` |
| Рынок | Германия, копирайт DE |

Копирайт: короткие предложения, без воды. Одна идея на секцию.

---

## 10. Навигация

```
/leistungen/  /bewaesserungsanlage-kosten/  /projekte/  /service/  /ueber-regnerwerk/
CTA: /garten-berechnen/
```

Header: sticky; на `/` transparent → white/blur on scroll; на внутренних — сразу solid.  
Logo: `Regner` + `Werk` (lime на dark hero, aqua-deep на светлом).  
Mobile: sticky bottom CTA «Garten berechnen».

---

## 11. Файловая карта

```
DESIGN.md                 ← этот слепок (читать первым)
app/globals.css           ← CSS tokens
app/page.tsx              ← главная
app/konfigurator/page.tsx
components/ui/            ← primitives
components/layout/        ← Header, Footer
components/sections/      ← секции главной
components/konfigurator/  ← конфигуратор
lib/content.ts            ← DE copy главной
lib/configurator.ts       ← шаги, Δ, kit, SVG helpers
```

---

## 12. Чеклист новой страницы / секции

- [ ] Один job на секцию
- [ ] Токены forest / lime(`#00FFCF`) / mint / aqua-deep — без самодельных цветов
- [ ] Hero без cards / stats / clutter
- [ ] Caveat ≤ 1 слово
- [ ] Чередование white ↔ mint/ice ↔ forest
- [ ] Без лишних теней; border вместо multi-shadow
- [ ] Lucide, не emoji
- [ ] DE короткий и точный
- [ ] Mobile: CTA stacked / full-width; sticky/sheet для цены если e-com
- [ ] Focus-visible на интерактиве
- [ ] Если конфигуратор — 2 колонки, шаги под планом, Δ на карточках, qty без цен в Im Paket

---

## 13. История ключевых правок (чтобы не откатывать)

1. Акцент с grass-green → **aqua `#00FFCF`** (вода + газон)
2. Packages: e-com карточки; у Fertig убран выбор Fläche → уход в конфигуратор
3. Individuell: контрастный dark, крупные иконки преимуществ, цена ≥ минимума Fertig
4. Process: компактный таймлайн + фото, без tag cloud / float
5. Projekte: 2×2 типы установок + центр-лого; текст справа выровнен вправо
6. Конфигуратор: 3 шага (без Intensität); без collapse-дублей stepper; 2 колонки; шаги под планом; Im Paket с фото и **qty без цен**

---

*Обновлять этот файл при каждом устойчивом продуктовом/визуальном решении. `KONFIGURATOR.md` — рабочий план; стиль и правила — только здесь.*

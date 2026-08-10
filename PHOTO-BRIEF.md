# RegnerWerk — бриф по фото (актуально)

Съёмка / подбор реальных кадров под сайт.  
После загрузки: файлы в `public/images/`, пути в [`lib/content/media.ts`](lib/content/media.ts) (страницы трогать не нужно).  
Отзывы: [`lib/content/testimonials.ts`](lib/content/testimonials.ts).  
Проекты: [`lib/content/projects.ts`](lib/content/projects.ts).

Пока в реестре — Unsplash-плейсхолдеры.

---

## Спека

| Параметр | Значение |
|----------|----------|
| Формат | WebP (или AVIF) |
| Hero / Final CTA | long edge ~1600–2000px, wide 16:9 |
| Секции / MediaBand / Stage | ~1200–1600px |
| Testimonials (карточки) | **landscape ~1200×900+**, не крошечные аватары — фото почти целиком видно, текст снизу |
| OG | 1200×630 |
| Сюжет | готовый сад, аккуратный монтаж, восстановленный газон — не каталог форсунок |
| Люди | только с согласия; на team — работа со спины/руки |
| Права | согласие владельца участка; без номеров авто / лиц соседей крупно |

---

## Приоритет съёмки

1. `hero-garden` + `og-default`
2. `install-work` + `trench-doc` + `measurement`
3. `lawn` + `beds` + `controller` + `house-garden`
4. `process` + `team-work` + `winter` + `final-cta`
5. 1–3 реальных проекта (уникальные кадры)
6. Testimonials T1–T3 (реальные фото объектов + согласие на цитату)

---

## Home: блок «Anwendungen» (Flächentypen)

**Зачем блок:** показать, **какие площади/работы** покрываем – не этапы услуг (те уже в Services выше).

| Карточка | Файл / ключ | Ссылка |
|----------|-------------|--------|
| Rasen | `rasen-head-to-head` / `lawn` | `/rasenbewaesserung-installieren/` |
| Gärten mit Beeten und Hecken | `beds` | `/tropfbewaesserung-hecken-beete/` |
| Hochbeete und Nutzbeete | `beds` | `/tropfbewaesserung-hecken-beete/` |
| Sport- und Spielrasen | `lawn` | `/rasenbewaesserung-installieren/` |
| Größere Grünflächen | `hero-garden` | `/bewaesserungsanlage-installieren-lassen/` |
| Bestehende Gärten | `bestehende-gaerten` | `/bewaesserung-bestehender-garten/` |

Копирайт: только **private Grundstücke** – без коммерческого Weinbau/Landwirtschaft/Stadion, если нет реальных кейсов.

---

## Home: блок Services «Was zu einer kompletten Anlage gehört»

**Зачем блок:** объяснить владельцу сада, что RegnerWerk продаёт **готовую систему**, а не набор деталей. Шесть карточек: Rasen · Komponenten · Steuerung · Planung · Montage · Einstellung.

Tropf остаётся на SEO (`/tropfbewaesserung-hecken-beete/`) и `/leistungen/` — в этой сетке главной слот занят компонентами.

**Не показывать:** каталог форсунок, стену логотипов Hunter/Rain Bird, хаотичную стройку, «рекламные» улыбки.

**Формат карточек:** ~1600×1000 (16:10), WebP, один ясный сюжет на кадр.

| Карточка | Смысл текста | Файл / ключ | Что снять (ТЗ) | Чего избегать |
|----------|--------------|-------------|----------------|---------------|
| **Rasenbewässerung** | Ровный автополив газона за счёт зон и перекрытия | `lawn.webp` | Готовый частный газон утром/вечером; желательно тонкая струя или только что политый ровный цвет; Versenkregner едва виден или утоплен | Шланг в руках, лужи, выжженные пятна «до», крупный каталог дождевателя |
| **Bewährte Komponenten** | Hunter / Rain Bird как отраслевой стандарт **внутри** нашей системы | `controller.webp` (пока) → лучше уникальный кадр | Аккуратно смонтированная Ventilbox / дождеватель в саду; бренды **только в тексте** карточки | Стена логотипов, россыпь коробок, «мы = Hunter» |
| **Steuerung** | Понятная ежедневная работа: времена, погода, зоны | `controller.webp` | Чистая Ventilbox / Steuergerät у стены дома — premium, собранно | Россыпь товаров, скриншот чужого приложения |
| **Planung** | Сначала замер и план зон, потом вскрытие газона | `process.webp` | Разметка на газоне, план/клипборд, рулетка — до вскрытия | CAD-спагетти, абстрактный офис без участка |
| **Montage** | Аккуратный встраиваемый монтаж в существующий сад | `install-work.webp` | Открытая аккуратная трасса или укладка трубы; покрытия/защита дорожек | Грязь на фасаде, разрушенный газон без защиты |
| **Start und Einstellung** | Не «включили и ушли» — настройка, проверка, доводка | `process` / позже `measurement` | Юстировка дождевателя/контроллера или зона в работе | Только «красивый сад» без намёка на настройку |

**Логика связки:** верхний ряд = результат в саду + компоненты + управление; нижний ряд = план → монтаж → настройка. Фото не должны выглядеть как шесть одинаковых «зелёных садов».

Карточка Planung сейчас: `process.webp` (разметка на объекте). Опционально позже — экспорт `plan-schema.webp` из конфигуратора.

---

## Ядро — файл, описание, ссылки

| # | Ключ | Файл | Описание кадра | Где используется |
|---|------|------|----------------|------------------|
| 1 | `heroGarden` | `/images/hero-garden.webp` | Готовый частный DE-сад, ровный газон, утро/вечер, без людей на переднем плане | `/` Hero; `/einsatzgebiet/` hero; 16× Land-pages (`/[land]/bewaesserungsanlage-installieren/`); Final CTA fallback; OG fallback |
| 2 | `installWork` | `/images/install-work.webp` | Аккуратный монтаж: трасса/трубы, покрытия, без хаоса | `/leistungen/` hero; `/ueber-regnerwerk/` hero; home «Montage»; MediaBand на преимуществах; stages Nachrüstung/Tropf |
| 3 | `lawn` | `/images/lawn.webp` | Versenkregner / ровный газон после полива или тонкая струя | `/rasenbewaesserung-installieren/` hero+bands; `/bewaesserungsanlage-installieren-lassen/` hero; Land MediaBand; home «Rasen»; stage finales; Compare «автоматически»; Testimonials T1 |
| 4 | `beds` | `/images/beds.webp` | Beete/Hecke с Tropfrohr у корней (можно под мульчей) | `/tropfbewaesserung-hecken-beete/` hero+bands; Compare Tropf; Testimonials T3 |
| 5 | `controller` | `/images/controller.webp` | Steuerung / Ventilbox у дома — чисто, premium | `/garten-berechnen/` hero; Wasserverbrauch / Anschluss heroes; home «Steuerung» + временно «Komponenten»; stages Steuerung; Testimonials T6 |
| 6 | `houseGarden` | `/images/house-garden.webp` | Bestehender Garten у дома: живой участок, не стройка | `/bewaesserung-bestehender-garten/` hero; `/schonender-einbau/` hero; home блок «bestehender Garten» + услуга Montage; Festpreis band; Testimonials T4 |
| 7 | `process` | `/images/process.webp` | Планирование на месте: план/планшет/разметка | `/bewaesserungsanlage-kosten/` hero; `/service/` hero; `/festpreis/` hero; home «Start»; stages Orientierung/Planung; Testimonials T5 |
| 7b | `planSchema` | `/images/plan-schema.webp` | Экспорт плана зон из конфигуратора (Überdeckung) | Home карточка «Planung»; до файла — SVG `PlanSchemaVisual` (`planSchemaReady`) |
| 8 | `trenchDoc` | `/images/trench-doc.webp` | Открытая трасса до засыпки + метка/фото для Anlagenpass | `/digitaler-anlagenpass/` hero; `/schonender-einbau/` band; stages Einbau/Dokumentation; Compare Nachrüstung |
| 9 | `measurement` | `/images/measurement.webp` | Manometer / Durchfluss на Anschluss или тест зоны | `/bewaesserung-nachgemessen/` hero; Wasseranschluss band; stages Wassercheck; Compare «результат» |
| 10 | `winter` | `/images/winter.webp` | Сад осень/зима или Entleerung/Winterfest (без клише) | `/wartung-winterservice/` hero |
| 11 | `teamWork` | `/images/team-work.webp` | Команда за работой (спины/руки), не студийный портрет | `/erste-saison-betreuung/` band; stages Schutz; `/ueber-regnerwerk/` |
| 12 | `finalCta` | `/images/final-cta.webp` *(или = hero)* | Второй кадр «сад вечером» или тот же hero | `/` Final CTA (`homeFinalCta`) |
| 13 | — | `/images/og-default.webp` | Кроп hero 1200×630 | Share / Open Graph (`lib/seo.ts`) |

---

## Testimonials (обновлено)

Карточки: **большая часть фото открыта**, звёзды сверху, цитата + имя снизу. Нужны **полнокадровые** фото объекта (не портреты лиц).

| # | Файл | Описание | Где |
|---|------|----------|-----|
| T1 | `/images/testimonials/rasen-nach-einbau.webp` | Готовый газон после монтажа | `/` «Was Kundinnen und Kunden sagen» (карточка 1) |
| T2 | `/images/testimonials/garten-gesamt.webp` | Общий вид сада с зонами | `/` карточка 2 |
| T3 | `/images/testimonials/beete-hecke.webp` | Beete/Hecke после Tropf | `/` карточка 3 |
| T4–T6 | опционально | house-garden / process / controller кадры | резерв в `testimonials.ts` (на home сейчас 3) |

Только с согласием на цитату + фото участка. Без согласия — оставить Beispielstimme или убрать блок.  
Не подставлять стоковые лица как «Kunden».

---

## Проекты (уникальные кадры)

Не шарить с hero. Без реальных объектов — «Beispiel» или скрыть.

| # | Файл | Описание | Ссылки |
|---|------|----------|--------|
| P1 | `/images/projects/koeln-rasen-hecke-01.webp` (+ `-02`) | Газон + Hecke после монтажа; ideally before/after | `/projekte/`, `/projekte/koeln-rasen-hecke/` |
| P2 | `/images/projects/hamburg-neubau-rasen-01.webp` | Ровный новый газон, чёткие зоны | `/projekte/hamburg-neubau-rasen/` |
| P3 | `/images/projects/muenchen-beete-tropf-01.webp` | Beete/Hecke с капельницей | `/projekte/muenchen-beete-tropf/` |

---

## Страницы → какой ключ в hero (шпаргалка)

| URL | Hero-ключ |
|-----|-----------|
| `/` | `heroGarden` (+ Final `finalCta`; Planung card → `planSchema` / SVG) |
| `/leistungen/` | `installWork` |
| `/bewaesserungsanlage-installieren-lassen/` | `lawn` |
| `/rasenbewaesserung-installieren/` | `lawn` |
| `/tropfbewaesserung-hecken-beete/` | `beds` |
| `/bewaesserung-bestehender-garten/` | `houseGarden` |
| `/bewaesserungsanlage-kosten/` | `process` |
| `/garten-berechnen/` | `controller` |
| `/service/` | `process` |
| `/ueber-regnerwerk/` | `installWork` |
| `/einsatzgebiet/` + Land-pages | `heroGarden` |
| `/schonender-einbau/` | `houseGarden` |
| `/bewaesserung-nachgemessen/` | `measurement` |
| `/bewaesserungsanlage-wasseranschluss-pruefen/` | `controller` |
| `/erste-saison-betreuung/` | `lawn` |
| `/digitaler-anlagenpass/` | `trenchDoc` |
| `/wasserverbrauch-leckagekontrolle/` | `controller` |
| `/festpreis/` | `process` |
| `/wartung-winterservice/` | `winter` |
| `/kontakt/`, legal | без обязательного hero-фото |

Stages / Compare / MediaBand на SEO-страницах **переиспользуют** те же 12 ключей ядра (отдельные файлы не обязательны, но желательны 1–2 уникальных кадра на длинную SEO-страницу).

---

## Структура папок

```
public/images/
  hero-garden.webp
  install-work.webp
  lawn.webp
  beds.webp
  controller.webp
  house-garden.webp
  process.webp
  trench-doc.webp
  measurement.webp
  winter.webp
  team-work.webp
  final-cta.webp
  og-default.webp
  projects/
    koeln-rasen-hecke-01.webp
    hamburg-neubau-rasen-01.webp
    muenchen-beete-tropf-01.webp
  testimonials/
    rasen-nach-einbau.webp
    garten-gesamt.webp
    beete-hecke.webp
```

---

## Чеклист замены

- [x] Часть ядра: `hero-garden`, `install-work`, `lawn`, `beds`
- [x] Проекты: Köln ×2, Hamburg, München → `projects.ts`
- [x] OG / Final CTA → `hero-garden.webp` (временно)
- [ ] `controller`, `house-garden`, `process`, `trench-doc`, `measurement`, `winter`, `team-work`
- [ ] Отдельный `og-default.webp` / `final-cta.webp` (опционально)
- [ ] Testimonials — реальные цитаты + уникальные фото участков
- [ ] `next.config.ts` — Unsplash remotePatterns убрать после полной замены

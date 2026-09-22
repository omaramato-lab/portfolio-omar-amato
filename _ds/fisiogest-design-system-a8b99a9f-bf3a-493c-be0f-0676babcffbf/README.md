# FisioGest — Design System

**FisioGest** is a *gestionale* (practice-management web & mobile app) for **fisioterapisti ed operatori della riabilitazione** — physiotherapists and rehabilitation practitioners working in Italy. Its tagline: **"La tua segreteria digitale, finalmente semplice."** ("Your digital front-desk, finally simple.")

The product helps a solo practitioner or small clinic manage three core jobs, which map to the app's primary navigation:

- **Agenda** — scheduling appointments, avoiding no-shows with automatic WhatsApp/SMS reminders ("promemoria"), and seeing free slots at a glance.
- **Pazienti** — patient records: clinical picture (*cartella clinica*), treatment path (*percorso*), documents, payments, and an overview with recovery metrics.
- **Incassi** — collections/billing: who still owes money, marking sessions as paid ("Segna pagato"), sending receipts, and exporting to accounting tools like *Fatture in Cloud*.

There is also a **Profilo** section and a marketing **Landing Page**.

The brand personality is **calm, clinical, trustworthy and friendly** — a healthcare-green palette, generous whitespace, rounded-but-restrained geometry, and warm conversational Italian copy that addresses the practitioner directly as *"tu"*.

---

## Sources

This system was reconstructed from the Figma file **`FisioGest.fig`** (mounted read-only). Key locations inside it:

- `Design-System / Foundations` — color tokens + the full type scale (source of truth for `colors_and_type.css`).
- `Design-System / Body_Pazienti-Dark`, `Body_Agenda-Dark`, `Dark`, `Light`, `Light2` — **dark-theme** screens (source for the `--dark-*` tokens & `[data-theme="dark"]` remap).
- `Design-System / background` — the **hero illustration backdrop** (mint circle + plus constellation, light & dark).
- `Design-System / Icone` — the custom line-icon family (16 / 24 / 48 px), copied into `assets/icons/`.
- `Design-System / illustrazioni` — the green spot-illustration set (empty states).
- `Design-System / Core-Components`, `Form-Components`, `Data-Display`, `Nav-Molecules`, `Button_dropdown`, `Scheduling`, `New-Components-Layout-Patterns` — component specs.
- `Desktop` page (esp. `Schermate-finite`: Overview, Pazienti list, Paziente Overview/Cartella/Percorso/Documenti/Pagamenti) — desktop product screens.
- `Mobile` page (UI-Agenda, UI-Pazienti, UI-Incassi, Modali-*, profilo) — mobile product screens.
- `Landing-Page / MacBook-Pro-16---1` — marketing site + brand copy.

> The reader is not assumed to have access to the Figma file; everything needed to design for FisioGest is captured in this folder.

---

## CONTENT FUNDAMENTALS

**Language:** Italian. UI labels are short Italian nouns/verbs: *Agenda, Pazienti, Incassi, Profilo, Modifica, Scheda, Conferma modifica, Segna pagato, Esporta, Filtri, Non pagato, Appuntamento non fissato, Assente.* (Some scaffolding placeholders in the Figma are still in English — e.g. "Enter text…", "DropDown", "Confirmed" — treat those as *unfinished*; ship Italian: "Inserisci testo…", "Confermato".)

**Voice — address the user as "tu".** Marketing and helper copy speak directly and warmly:
- *"La tua segreteria digitale, finalmente semplice."*
- *"L'agenda che respira con te!"*
- *"Dimentica il caos dei messaggi sparsi su WhatsApp o i fogli volanti."*
- *"Fissi un nuovo appuntamento in meno di 30 secondi, anche mentre sei al telefono con il paziente."*

**Tone:** reassuring, practical, anti-bureaucratic. It sells *time back* and *peace of mind* — *"Meno tempo alle scartoffie, più tempo per la cura dei tuoi pazienti."* Pain points are named plainly ("Addio No-Show", "Hai mai avuto l'ansia di non sapere chi deve ancora pagarti?").

**Casing:**
- Headings & section titles: **Sentence case** ("Schedule for today", "Controllo totale sui tuoi Incassi"). Title-case creeps in on marketing heads — keep it light.
- Buttons: Sentence case ("Segna pagato", "Conferma modifica", "Registrati e Prova").
- Meta / overline labels: occasionally **UPPERCASE** for small section eyebrows in-app ("PROSSIMO APPUNTAMENTO", "ADERENZA AL PIANO") — used sparingly as 12px medium captions.
- Form field labels: Sentence case ("Metodo promemoria", "Cadenza promemoria", "Appointment time").

**Marketing body pattern:** a bolded lead-in followed by the explanation, e.g. *"**Vantaggio:** Visualizzazione chiara dei 'buchi' liberi nella settimana."*, *"**Shortcut rapidi:** Fissa appuntamenti per 'Oggi' o 'Domani' con un solo tocco."*

**Numbers & units:** Euro with the symbol before the amount and a space context ("Tariffa: €80", "€9999.99"), dates written out in Italian on mobile ("Lunedì 24 maggio - 10:00") or `DD/MM/YYYY` in tables ("01/10/2026"), clinical metrics with units ("4.2/10", "ROM spalla 135°", "Sedute 10/20").

**Emoji:** **none.** Status is conveyed by colored pills + a dot, never emoji.

---

## VISUAL FOUNDATIONS

**Overall feel:** a clean clinical SaaS — white surfaces floating on a light grey canvas, one confident green as the only saturated hue, lots of breathing room, soft rounded corners. No gradients-as-decoration, no glassmorphism, no drop-shadow theatrics.

**Color**
- One brand hue: **green `#377D60`**, deepening to `#0A6440` for hover/press and strong accents, with a pale `#E0F3EA` for soft fills and selected states. Illustration accents use a lighter mint `#A6DAC1`.
- Neutrals are cool greys: canvas `#F5F5F7`, cards `#FFFFFF`, inset/headers `#F0F2F4`, hairlines `#E0E4EA`. Text is `#1E2933` (primary) and `#5B6470` (secondary).
- Status uses **bg + fg pairs**: success `#E0F3EA`/`#0B7A4B`, warning `#FFF4DF`/`#B95C00`, danger `#FFE5E5`/`#B42318`. KPI tiles fill with the *bg* tint and color the number/trend with the *fg*.
- Accent yellow `#FFB020` for notification dots only.

**Dark theme** *(added)*
- The system now ships a **dark theme**, applied with `data-theme="dark"` on `<html>`, `<body>`, or any wrapper. It remaps the semantic tokens; no markup changes needed.
- Dark neutrals: canvas `#1D2129`, cards/tiles `#171A21`, hairlines `#2A2F3A`. Text `#F5F7FA` (primary) / `#A7B0BE` (secondary).
- On dark, the **brand accent lightens** to `#45A07A` (KPI numbers, dots, links, active states) for contrast; the brand-green CTA fill and the hero gradient stay green. Status *foregrounds* keep their hue; status *backgrounds* darken (`--dark-success-bg` etc.). Shadows deepen to near-black.
- Raw dark values live as `--dark-*` tokens in `colors_and_type.css` (source: `Body_Pazienti-Dark` / `Body_Agenda-Dark`).

**Hero illustration backdrop** *(added)*
- The patient-page hero sits on a soft **spot-illustration backdrop**: a large mint circle (`#E0F3EA`) with an inner ring (`#A6DAC1`) and a scattered **plus-mark constellation**. Light hero uses marks in `#0A6440` + mint; dark hero uses `#0D4332` on the dark surface. Tokens: `--illustration-circle-soft`, `--illustration-circle-mint`, `--illustration-mark`, `--illustration-mark-dark`, `--illustration-glow`.

**Type**
- **Inter** for everything (Regular 400, Medium 500, SemiBold 600, Bold 700). No serif, no display face in product UI (the marketing hero uses a heavy Inter weight).
- Tight scale: H1 24/600, H2 20/600, H3 16/600, body 14/400, body-lg 16/400, labels & meta 12/500, buttons 14/500. Line-height is generous relative to size (20px on 14px body). Headings carry a hair of negative letter-spacing.

**Spacing & layout**
- **Base-8 system** (the design variables are built on 8): steps 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Auto-layout gaps and paddings snap to these (button padding 8×16; card gaps 12–24; section gaps 32–64). *(KPI tiles were corrected to base-8 padding `8×16` — previously `14×16`.)*
- Desktop = fixed left icon-rail sidebar (Agenda / Pazienti / Incassi top, Profilo avatar pinned bottom) + a roomy white content area on the grey canvas. Mobile = top bar with "← Indietro", content, a **sticky bottom action bar**, and a 3-tab bottom nav (Agenda / Pazienti / Incassi).

**Corners & borders**
- Radii: 8px is the workhorse (buttons, inputs, cards, color blocks); 6px for chips/small headers; 12px for large cards/sheets; pill (999px) for status badges, segmented toggles and avatars; 2px only at frame edges.
- Borders are 1px hairlines in `#E0E4EA`. Cards are defined more by border + soft shadow than by heavy strokes.

**Cards**
- White (`#FFFFFF`), 8–12px radius, 1px `#E0E4EA` border and/or a soft `--shadow-sm`. KPI tiles drop the border and instead fill with a status-bg tint. Tables sit in a white card with a `#F0F2F4` header row and `#E0E4EA` row dividers.

**Elevation / shadow**
- Restrained, neutral, low-spread: `--shadow-sm` for resting cards, `--shadow-md` for menus/popovers, `--shadow-lg` for modals/sheets. Illustrations use a distinctive **brand-tinted** shadow `-4px 3px 4px rgba(10,100,64,0.2)`.

**Backgrounds**
- Flat color only — grey canvas, white surfaces, tinted status fills. No photographic backgrounds, no full-bleed imagery, no repeating textures, no gradient washes in the app. Marketing uses a flat grey hero block.

**Imagery & illustration**
- The brand's imagery *is* the **spot-illustration set**: a soft mint circle (`#E0F3EA`) backdrop, scattered four-point sparkles, decorative outline **plus / minus / arrow** marks in mint (`#A6DAC1`) and dark green (`#0A6440`), and a central white UI-fragment (a card or document) carrying a dark-green circular icon badge (`#377D60`). Used for empty states / onboarding. Cool, calm, monochromatic green — never warm, never photographic.

**Avatars:** solid `#377D60` circle with white initials (e.g. "AM", "Maria Rossi" → "MR").

**Buttons**
- *Primary:* green `#377D60` fill, white text, 8px radius, 8×16 padding, optional 16px leading icon.
- *Secondary:* white fill, 1px `#E0E4EA` border, primary-text label.
- *Dark CTA:* near-black `#1E2933` fill (mobile sticky "Conferma modifica").
- *Segmented control:* pill track; selected segment becomes a soft-green pill with the primary-green label + a small leading dot/icon.

**Interaction**
- *Hover:* primary buttons darken to `#0A6440`; secondary/ghost controls go to a `#F0F2F4` fill or `#E0F3EA` tint; links/icons deepen green.
- *Active/pressed:* deeper green, no large scale jump (a subtle ~0.98 press at most).
- *Selected nav/tab:* soft-green pill behind the item + green label, plus a 2px green underline for in-page tabs.
- *Transitions:* quick and subtle — ~120–160ms ease for color/background, used for hovers, tab switches, accordion open/close. No bounces, no decorative looping motion.

**Transparency / blur:** essentially unused — overlays are a plain scrim (`rgba(0,0,0,0.25)` to `0.64`) behind modals. No backdrop blur in product.

---

## ICONOGRAPHY

FisioGest's product uses its **own custom line-icon family** (drawn in Figma): **outline style**, ~1.3–1.5px stroke, **rounded caps/joins**, on a square grid at **three fixed sizes — 16×16, 24×24, 48×48** (same artwork scaled), default-colored brand green `#377D60` and recolored to `#5B6470`/`#1E2933` or status colors as needed. Sizing is fixed-container (the icon sits centered in a 16/24/48 box).

**Working icon set in this system → [Lucide](https://lucide.dev) (flagged substitution).**
The brand icons export from the `.fig` as **fragmented multi-layer paths** (e.g. the calendar exports as just its frame, the clock as just its ring) that don't reassemble into reliable single flat files. So this system renders icons with **Lucide**, which is a near-perfect match for the FisioGest aesthetic: the same thin, rounded-cap outline language. Lucide is `currentColor`-driven, so icons recolor via CSS `color` exactly as the originals were meant to. Load via CDN and call `lucide.createIcons()`:

```html
<i data-lucide="calendar-days"></i>
<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

**Name mapping (FisioGest → Lucide):** calendar→`calendar-days`, clock→`clock`, search→`search`, filtri→`sliders-horizontal`, plus→`plus`, close→`x`, edit→`pencil`, file→`file-text`, scheda→`contact`, download→`download`, upload→`upload`, anteprima/eye→`eye`, option→`more-vertical`, arrowback→`arrow-left`, arrow-down→`chevron-down`, call→`phone`, sms→`message-square`, whatsapp→`message-circle`, profile→`user`, pazienti→`users`, incassi→`banknote`, cassa→`wallet`, settings→`settings`.

> The original brand SVG fragments are preserved in **`assets/icons/`** for reference. **Ask the user for clean icon exports** (or an icon-font / sprite) if exact brand parity is required — Lucide is a stand-in, not the literal artwork.

- **Emoji:** never used. **Unicode glyphs as icons:** avoid. Chevrons/arrows for navigation and disclosure use the icon set.
- The three primary nav destinations have dedicated glyphs (Pazienti = group of people, Incassi/Cassa = stacked bills, Agenda/Scheda = contact card), reused in the sidebar, bottom tab bar, and page headers.

---

## INDEX — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography. |
| `SKILL.md` | Agent-Skill manifest so this system can be used as a downloadable skill. |
| `colors_and_type.css` | All design tokens: color, spacing (base-8), radius, elevation, type scale + semantic helpers. Self-hosts Inter. Import this in any FisioGest artifact. |
| `fonts/` | Self-hosted **Inter** (Regular / Medium / SemiBold / Bold). |
| `assets/icons/` | Brand line-icon SVG fragments (reference only — runtime icons use Lucide; see ICONOGRAPHY). |
| `preview/` | Specimen HTML cards that populate the Design System tab (color incl. **dark palette**, type, spacing, components incl. **dark surfaces / price-range slider / treatment-status & pain chips**, brand incl. **hero illustration backdrop**). |
| `ui_kits/desktop-app/` | Interactive recreation of the **desktop** app (sidebar, patient list, patient overview + VAS chart, agenda, incassi). `index.html` is the click-through. |
| `ui_kits/mobile-app/` | Interactive recreation of the **mobile** app (patient overview hero, agenda, incassi, edit-appointment sheet, bottom nav). `index.html` is the click-through. |

**Note on the Figma:** color tokens, the type scale, the icon set and component specs were read directly from the `.fig` pseudocode (source of truth); the brand spot-illustrations are intricate multi-layer Figma compositions that don't export as single flat files — their motif is documented above and reconstructed faithfully for empty states in the UI kits.

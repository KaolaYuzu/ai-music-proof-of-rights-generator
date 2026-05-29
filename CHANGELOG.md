# CHANGELOG

## v3.5.0 REVISE7f — 2026-05-29

### Fixed

**Mobile Responsive Layout (`@media max-width: 900px`)**
- Three-column desktop grid no longer applied to mobile widths
- `#app` switches to single-column stacked layout at ≤ 900px; column order: header → main form → sidebar → status panel
- Main form content appears first — highest priority on narrow screens
- `#sb` (left sidebar): `position:sticky; height:100vh` → `position:static; height:auto` on mobile
- `#pv` (right panel): same unstick treatment; moves below main content on mobile
- All `input`, `select`, `textarea`: `width:100%; font-size:16px` on mobile (prevents iOS auto-zoom)
- `.f2` (two-column field rows): collapses to single column on mobile
- `html`, `body`: `overflow-x:hidden; max-width:100vw` — no horizontal scroll
- `.step-nav`: `flex-wrap:wrap` — action buttons wrap on narrow screens
- Hero title: `58px → 32px` on mobile
- Modals: `94vw` width on mobile
- Desktop layout (> 900px) fully preserved

### Unchanged from REVISE7e

- **Required field validation** — Step 1 (7 fields) + Step 4 (10 fields) all enforced
- **Required asterisks** — inner-span i18n pattern; survive language switching (zh ↔ en)
- **Release Date TBD button** — "尚未確定" quick-fill preserved
- **Save draft / Clear draft** — localStorage persistence unchanged
- **Empty export blocker** — PDF / JSON / Copy all blocked when fields empty
- **CreditGate redemption UI** — redeem modal, balance display, export gate intact (codes removed from public package)
- **Language switching** — full zh ↔ en i18n unchanged
- **propri companion** — PNG-based assets, CSS-only animation

---

## v3.5.0 REVISE7e — 2026-05-29

- Step list internal scroll: `#sb > .glass` override
- Work Identity (Step 1): all 7 fields required + red `*` markers
- Ownership (Step 4): all 10 fields required + red `*` markers
- Release Date: "尚未確定" quick-fill button
- `calcReady()` rewritten with S1 + S4 required checks

---

## v3.5.0 REVISE7d — 2026-05-29 (Rejected)

- `#app { height:100vh }` caused layout compression — rejected in QA

---

## v3.5.0 REVISE7c — 2026-05-29

- 10 CSS fixes: sidebar scroll, button sizing, stepper labels

---

## v3.5.0 REVISE7b / REVISE7a / REVISE7 — 2026-05-27–29

- UI layout, Toast, draft auto-resume, export lock, credit gate integration

---

## v3.5.0 CreditGate PortalyMVP — 2026-05-27

- Credit system: localStorage trial, balance, redeem whitelist, Portaly payment link

---

## v3.4.x — 2026-05

- v3.4.8 RC1 → v3.4.7 → v3.4.6 (full i18n) → v3.4.5 (TermPatch) → v3.4.4 → v3.4.3 → v3.4.2 → v3.4.1 → v3.4.0

---

## v3.3.0 — 10 UX Corrections

## v3.2.0 — Cinematic UI + propri Companion

## v3.0.0 — Initial prototype (8-step flow, document preview, export)

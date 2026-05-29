# CHANGELOG

## v3.5.0 REVISE7g — 2026-05-29

### Added: Mobile Horizontal Workspace (`@media max-width: 900px`)

- **Layout strategy:** `#app` becomes horizontal scroll container on mobile; three columns preserved at 320px + 440px + 320px = 1080px total
- `scroll-snap-type: x mandatory` — swipe snaps to column boundaries
- `-webkit-overflow-scrolling: touch` — iOS momentum scroll
- JS auto-scroll: `app.scrollLeft = 320` on load → center (form) column shown by default
- `#sb`, `#pv`: `position:relative; height:100%; overflow-y:auto` — each panel scrolls independently
- `#sb > .glass`: `flex:1; max-height:none` — step list fills sidebar height without fixed cap
- `input/select/textarea`: `font-size:16px` — prevents iOS auto-zoom on focus
- Desktop (> 900px): unchanged

### Unchanged from REVISE7e

- Required field validation (Step 1 × 7, Step 4 × 10)
- Red `*` markers — i18n-safe inner-span pattern
- Release Date "尚未確定" button
- Save draft / Clear draft
- Empty export blocker
- CreditGate redeem UI (codes removed from public package)
- Language switching zh ↔ en
- propri companion PNG assets

---

## v3.5.0 REVISE7f — 2026-05-29 (Rejected — full single-column)

- Mobile collapsed to full single column — propri clipped, info flow too long — rejected in QA

## v3.5.0 REVISE7e — 2026-05-29 (Desktop checkpoint)

- Step list internal scroll, Work Identity + Ownership required fields, red `*` markers, TBD date button

## v3.5.0 REVISE7d — 2026-05-29 (Rejected)

- `#app { height:100vh }` caused layout compression

## v3.5.0 REVISE7c — 2026-05-29

- 10 CSS fixes, desktop visual pass

## v3.5.0 REVISE7a/b — 2026-05-27–29

- Toast, draft auto-resume, export lock, UI layout

## v3.5.0 CreditGate PortalyMVP — 2026-05-27

- Credit system, Portaly link, export gate

## v3.4.x → v3.0.0

- See full history in internal lab logs

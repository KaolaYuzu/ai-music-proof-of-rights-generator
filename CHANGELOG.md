# CHANGELOG

## v3.5.0 REVISE7h — 2026-05-29

### Root Cause Fix: iOS Safari Mobile Scroll

**Problem (REVISE7g):** `html, body { overflow: hidden }` was used to prevent page scroll while the horizontal workspace was active. On iPhone Safari, setting `overflow: hidden` on `html` or `body` blocks ALL touch-scroll events including inside descendant scroll containers — making the three-column workspace completely unswipeable on real devices.

**Fix:** Replaced with a dedicated `.ws-scroll` wrapper as the horizontal scroll container:

- `<div class="ws-scroll" id="wsScroll"><div class="ws-inner">` wraps `#sb`, `#mn`, `#pv`
- `html` and `body`: only `overflow-x: hidden` (x-axis clip, does NOT block touch events)
- `.ws-scroll`: `overflow-x: auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y`
- `scroll-snap-type: x mandatory` on `.ws-scroll` — snaps to column boundaries
- `scroll-snap-align: start; scroll-snap-stop: always` on each column
- JS auto-scrolls `wsScroll.scrollLeft = 320` on load → shows center (form) column
- Desktop: `#app` grid uses `"hd"/"ws"` areas; `.ws-inner` holds `330px 1fr 330px` columns

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

## v3.5.0 REVISE7g — 2026-05-29 (Rejected — iOS scroll lock)

- Horizontal workspace using `#app overflow-x: auto` + `html,body { overflow:hidden }`
- Passed code QA but failed on real iPhone Safari: html/body overflow:hidden blocks all touch scroll

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

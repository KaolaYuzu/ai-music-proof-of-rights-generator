# QA Log — v3.5.0 REVISE7h (PublicGitHubSafe)

**Version:** v3.5.0 REVISE7h · 2026-05-29
**Status:** Code QA 24/24 PASS · Mobile Visual QA pending (real device)

---

## Desktop QA: ✅ PASSED (REVISE7e baseline confirmed by user)

---

## REVISE7h Code QA — 24/24 PASS

| # | Check | |
|---|-------|-|
| H1 | wsScroll wrapper div in HTML (`id="wsScroll"`) | ✅ |
| H2 | ws-inner div in HTML (`class="ws-inner"`) | ✅ |
| H3 | `/ws-inner` comment present | ✅ |
| H4 | `/ws-scroll` comment present | ✅ |
| V1 | Version `v3.5.0 REVISE7h · 2026-05-29 · Local-First` | ✅ |
| V2 | No REVISE7g/7f version strings | ✅ |
| D1 | `#app` uses `grid-area: ws` | ✅ |
| D2 | `.ws-inner` has `330px 1fr 330px` desktop columns | ✅ |
| D3 | `.ws-inner` has `grid-template-areas: "sb mn pv"` | ✅ |
| D4 | `#app` has `"ws"` grid area | ✅ |
| M1 | `@media (max-width: 900px)` present | ✅ |
| M2 | REVISE7h mobile block comment present | ✅ |
| M3 | `.ws-scroll` has `-webkit-overflow-scrolling: touch` | ✅ |
| M4 | `scroll-snap-type: x mandatory` on `.ws-scroll` | ✅ |
| M5 | `touch-action: pan-x pan-y` on `.ws-scroll` | ✅ |
| M6 | `320px 440px 320px` mobile column widths | ✅ |
| M7 | `.ws-inner` has `width: 1080px` | ✅ |
| M8 | `font-size: 16px !important` on inputs (iOS zoom fix) | ✅ |
| M9 | `100svh` used for mobile app height | ✅ |
| S1 | `html`/`body` NOT locked with `overflow:hidden` (both axes) | ✅ |
| S2 | `overflow-x: hidden` on body (x-axis clip only) | ✅ |
| S3 | `overflow-y: auto` on body | ✅ |
| J1 | `wsScroll.scrollLeft = 320` in JS | ✅ |
| J2 | REVISE7h JS comment present | ✅ |
| JS | Node --check: no syntax errors | ✅ |

---

## Mobile Visual QA — Pending (real device)

To test on real device via Vercel:

| Check | |
|-------|-|
| iOS Safari 390px: auto-scroll to center on load | ☐ |
| iOS Safari 390px: left/right swipe between panels | ☐ |
| iOS Safari 390px: propri mascot fully visible | ☐ |
| iOS Safari 390px: center form fields fillable | ☐ |
| iOS Safari 390px: right panel reachable by swipe | ☐ |
| iOS Chrome 430px: same checks | ☐ |
| Desktop (> 900px): layout unchanged | ☐ |

---

## Public Safety Audit

| | |
|-|-|
| Demo code #1 (Starter) removed | ✅ |
| Demo code #2 (Creator) removed | ✅ |
| Demo code #3 (Test) removed | ✅ |
| `DEMO_CODES = {}` | ✅ |
| No `.env` / secrets | ✅ |
| No `node_modules` / `.DS_Store` / `.zip` | ✅ |
| No Jennifer project files | ✅ |

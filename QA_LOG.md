# QA Log — v3.5.0 REVISE7g (PublicGitHubSafe)

**Version:** v3.5.0 REVISE7g · 2026-05-29
**Status:** Code QA 18/18 PASS · Mobile visual QA pending (real device / Vercel)

---

## Desktop QA: ✅ PASSED (REVISE7e baseline confirmed by user)

---

## Mobile Code QA — 18/18 PASS

| # | Check | |
|---|-------|-|
| G1 | Version `v3.5.0 REVISE7g · 2026-05-29 · Local-First` | ✅ |
| G2 | 3-col fixed widths 320px + 440px + 320px | ✅ |
| G3 | `#app min-width: 1080px` | ✅ |
| G4 | `#app overflow-x: auto` | ✅ |
| G5 | `-webkit-overflow-scrolling: touch` | ✅ |
| G6 | `scroll-snap-type: x mandatory` | ✅ |
| G7 | `#app height: 100vh` | ✅ |
| G8 | `html, body overflow: hidden` | ✅ |
| G9 | `#sb / #pv position: relative` (sticky removed) | ✅ |
| G10 | Step list `flex: 1 1 0; max-height: none` | ✅ |
| G11 | Panels `max-height: none` | ✅ |
| G12 | `input font-size: 16px` (iOS zoom prevention) | ✅ |
| G13 | `scroll-snap-align: start` on panels | ✅ |
| G14 | `scrollToCenter` JS function present | ✅ |
| G15 | Desktop `330px 1fr 330px` preserved in base CSS | ✅ |
| G16 | All REVISE7e core functions untouched | ✅ |
| G17 | `app.scrollLeft = 320` present | ✅ |
| G18 | JS syntax OK | ✅ |

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

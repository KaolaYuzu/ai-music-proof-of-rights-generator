# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP — REVISE7h
**Date:** 2026-05-29
**Status:** ✅ Desktop QA Passed · ⚠️ Mobile Visual QA Pending (real device)

---

## How to Open

Open `index.html` in Chrome. No server required. Keep `assets/` in the same folder.

For Vercel: deploy this folder as-is. `index.html` at root is served automatically.

---

## Mobile Layout (REVISE7h — Horizontal Workspace, iOS-Safe)

This version uses a **dedicated `.ws-scroll` wrapper** as the horizontal scroll container on mobile (≤ 900px).

**Why REVISE7h (vs REVISE7g):**
REVISE7g used `#app` as the scroll container and set `html, body { overflow: hidden }` to prevent page scroll.
On iPhone Safari, `overflow: hidden` on `html` or `body` locks ALL touch-based scroll including descendants — making the workspace completely unswipeable.

**REVISE7h fix:**
- New `<div class="ws-scroll" id="wsScroll">` wrapper encloses the three columns
- `html` and `body` are **NOT locked** — only `overflow-x: hidden` (x-axis clip only)
- `.ws-scroll` owns the horizontal scroll: `overflow-x: auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y`
- Three columns preserved at fixed widths: **Left 320px · Center 440px · Right 320px**
- On load, JS auto-scrolls to the **center (form) column** (`wsScroll.scrollLeft = 320`)
- `scroll-snap-type: x mandatory` — swipe snaps cleanly to each column
- Each column scrolls independently in the vertical direction
- Desktop layout (> 900px): three-column grid unchanged via `.ws-inner`

---

## Commercial Logic (CreditGate)

| | |
|---|---|
| Free trial | 1 formal export |
| Paid export | 1 credit = 1 export |
| Starter Pack | US$5 = 6 credits |
| Creator Pack | US$20 = 25 credits |
| Payment | Portaly (`https://portaly.cc/kaola`) — replace before launch |
| Export gate | Enforced in-app via localStorage |

> Redemption codes are removed from this public package. Configure private codes before deployment. Do not commit live redemption codes to a public repository.

---

## Required Fields

**Step 1 — Work Identity (7 required):** Track Title, Artist Name, Release Type, Version Name, Language, Genre & Mood, Release Date

**Step 4 — Ownership & Rights (10 required):** Master Owner, Composition Owner, Lyricist, Composer, Producer, Performer, Featured Artist, Royalty Split, Sample Use, Cover Art Rights

---

## File Structure

```
index.html
assets/propi/propri_main.png
assets/propi/propri_front.png
assets/propi/propri_focus.png
assets/propi/propri_side.png
```

---

## Prototype Limitations

- localStorage is bypassable via DevTools
- No server-side validation
- Portaly URL is a placeholder
- No batch/multi-track export (planned v4)

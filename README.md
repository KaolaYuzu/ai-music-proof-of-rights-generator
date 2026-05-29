# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP — REVISE7g
**Date:** 2026-05-29
**Status:** ✅ Desktop QA Passed · ⚠️ Mobile Visual QA Pending (real device)

---

## How to Open

Open `index.html` in Chrome. No server required. Keep `assets/` in the same folder.

For Vercel: deploy this folder as-is. `index.html` at root is served automatically.

---

## Mobile Layout (REVISE7g — Horizontal Workspace)

This version uses a **horizontal swipe workspace** on mobile (≤ 900px):

- Three columns preserved at fixed widths: **Left 320px · Center 440px · Right 320px**
- `#app` is the horizontal scroll container — users swipe left/right between panels
- On load, JS auto-scrolls to the **center (form) column** (`app.scrollLeft = 320`)
- `scroll-snap-type: x mandatory` — swipe snaps cleanly to each column
- Each column scrolls independently in the vertical direction
- Desktop layout (> 900px): three-column grid unchanged

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

# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP — REVISE8
**Date:** 2026-05-30
**Status:** ✅ Code QA 41/41 PASS · ⚠️ Mobile Visual QA Pending (real device)

---

## How to Open

Open `index.html` in Chrome. No server required. Keep `assets/` in the same folder.

For Vercel: deploy this folder as-is. `index.html` at root is served automatically.

---

## Mobile Layout (REVISE8 — Single-Flow + Propi Floating Cursor)

**Architecture change from REVISE7g/7h horizontal workspace.**

After real-device testing confirmed that horizontal workspace approaches (REVISE7g/7h) were problematic on iOS Safari, REVISE8 adopts a single vertical content flow for mobile.

**Mobile (≤ 900px):**
- Left sidebar (`#sb`) hidden — no Propi card, no step list panel
- Main form (`#mn`) is the full-width primary content
- Readiness summary (`#pv`) shown below the main form
- Layout order: Header → Stepper → Main Form → Readiness Summary → Draft Actions
- No horizontal scrolling required
- Propi becomes a **56px floating cursor** fixed at bottom-right, with a gentle bob animation
- Language switch (`ZH/EN`) stays in the header — always visible
- Clear draft button visible alongside Save draft

**Desktop (> 900px):** Three-column layout unchanged — left sidebar, center form, right status panel.

---

## Export Logic (REVISE8)

| Action | Credit charged? |
|---|---|
| 🖨 Preview / Print document | **No** — preview only |
| { } Download JSON archive | **Yes** — formal export |
| ⎘ Copy plain text report | **Yes** — formal export |

`window.onafterprint` removed — unreliable on mobile Safari, not used for credit deduction.

---

## Commercial Logic (CreditGate)

| | |
|---|---|
| Free trial | 1 formal export |
| Paid export | 1 credit = 1 export |
| Starter Pack | US$5 = 6 credits |
| Creator Pack | US$20 = 25 credits |
| Payment | Portaly (`https://portaly.cc/kaola`) — replace before launch |
| Export gate | JSON + Copy gated · PDF/Print ungated |

> Redemption codes are removed from this public package. Configure private codes before deployment.

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

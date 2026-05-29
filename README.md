# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP — REVISE7f
**Date:** 2026-05-29
**Status:** ✅ Desktop QA Passed · ⚠️ Mobile Visual QA Pending

---

## What This Is

A local-first, single-file web app that helps AI music creators document their proof-of-rights — tracking authorship, ownership, AI tool usage, sampling disclosures, and export-ready JSON/PDF records.

No backend. No API keys. No accounts required. All data stays in your browser (localStorage).

---

## How to Open

Open `index.html` directly in Chrome. No server needed.

```
open index.html
```

Keep `assets/` in the same directory as `index.html`.

---

## Mobile Responsive (REVISE7f)

This version includes a mobile breakpoint at `≤ 900px`:

- Single-column stacked layout (main form first, then sidebar, then status panel)
- All form fields `100% width` — no horizontal scrolling required
- iOS font-size `16px` to prevent auto-zoom on input focus
- `.f2` two-column grids collapse to single column
- Modals resize to `94vw`
- Desktop three-column layout (> 900px) unchanged

---

## Commercial Logic (CreditGate)

| Action | Requirement |
|--------|-------------|
| Free trial | 1 formal proof export (trial detected via localStorage) |
| Paid export | 1 credit = 1 formal proof export |
| Starter Pack | US$5 = 6 credits |
| Creator Pack | US$20 = 25 credits |
| Payment & code delivery | Portaly (`https://portaly.cc/kaola`) — replace before launch |
| Credit redemption | Redeem code in-app → credits added to localStorage |
| Export gate | WebApp enforces trial / balance / readiness before export |

> **Public package note:** Redemption codes are removed from this public package. Configure private redemption codes before deployment. Do not commit live redemption codes to a public repository.

---

## Required Fields

**Step 1 — Work Identity (all 7 required):**
Track Title, Artist Name, Release Type, Version Name, Language, Genre & Mood, Release Date (or "尚未確定")

**Step 4 — Ownership & Rights (all 10 required):**
Master Owner, Composition Owner, Lyricist, Composer, Producer, Performer, Featured Artist (enter "None" if N/A), Royalty Split, Sample Use, Cover Art Rights

---

## File Structure

```
index.html          — Main app (all CSS/JS inline, single file)
assets/
  propi/
    propri_main.png
    propri_front.png
    propri_focus.png
    propri_side.png
README.md
CHANGELOG.md
QA_LOG.md
NEXT_ACTIONS.md
```

---

## Intentional Design Choices

- "Step N of 8" eyebrow: intentionally English in both language modes
- `AI_Music_Proof_of_Rights_` in filenames: intentionally English
- `propri` brand name: intentionally not translated
- Step 7 preview: intentionally NOT credit-gated (preview ≠ export)

---

## Prototype Limitations

- localStorage is bypassable via DevTools — not for production monetization
- No server-side validation of redeem codes or credit balance
- Portaly URL `https://portaly.cc/kaola` is a placeholder — replace before public launch
- No multi-track or batch export (planned for v4)

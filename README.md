# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP Checkpoint Candidate
**Source:** REVISE7e
**Date:** 2026-05-29
**Status:** ✅ Manual QA Passed

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

Make sure the `assets/` folder stays in the same directory as `index.html`.

---

## Commercial Logic (CreditGate)

| Action | Requirement |
|--------|-------------|
| Free trial | 1 formal proof export (trial auto-detected via localStorage) |
| Paid export | 1 credit = 1 formal proof export |
| Starter Pack | US$5 = 6 credits |
| Creator Pack | US$20 = 25 credits |
| Payment & code delivery | Handled by Portaly (`https://portaly.cc/kaola`) |
| Credit redemption | Redeem code in-app → credits added to localStorage |
| Export gate | WebApp enforces trial / credit balance / readiness before export |

> **Prototype note:** localStorage credit gating is not production-secure. Demo redemption codes are removed from the public package. Configure private redemption codes before deployment. Do not commit live redemption codes to a public repository.

---

## Required Fields (v3.5.0)

### Step 1 — Work Identity
All 7 fields required before export: Track Title, Artist Name, Release Type, Version Name, Language, Genre & Mood, Release Date (or "尚未確定")

### Step 4 — Ownership & Rights
All 10 fields required before export: Master Owner, Composition Owner, Lyricist, Composer, Producer, Performer, Featured Artist (enter "None" if N/A), Royalty Split, Sample Use, Cover Art Rights

---

## File Structure

```
index.html          — Main app (all CSS/JS inline, single file)
assets/
  propi/
    propri_main.png   — Companion mascot (idle)
    propri_front.png  — Companion mascot (active)
    propri_focus.png  — Companion mascot (focus)
    propri_side.png   — Companion mascot (side)
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
- `Local-First Archive` in JSON generator: intentionally English (product tagline)
- Step 7 preview: intentionally NOT credit-gated (preview ≠ export)

---

## Prototype Limitations (documented)

- localStorage is bypassable via DevTools — not for production monetization
- No server-side validation of redeem codes or credit balance
- Portaly URL `https://portaly.cc/kaola` is a placeholder — replace before public launch
- No multi-track or batch export (planned for v4)

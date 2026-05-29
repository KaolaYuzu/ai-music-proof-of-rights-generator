# NEXT ACTIONS — v3.5.0 REVISE7g

**Status:** Deployed to Vercel — pending real-device QA
**Date:** 2026-05-29

---

## Real Device QA (Immediate)

Deploy to Vercel and test on:

- **iOS Safari 390px (iPhone 15 / 15 Pro)**
  - [ ] Center column shows on load (no manual scroll needed)
  - [ ] Left/right swipe works between 3 panels
  - [ ] Propri mascot fully visible in left panel
  - [ ] Step list scrolls within left panel
  - [ ] Center form fully fillable
  - [ ] Right status panel reachable by swiping right
  - [ ] No content clipped without scroll access

- **iOS Chrome / Android Chrome 430px**
  - [ ] Same checks as above

- **Desktop Chrome > 900px**
  - [ ] Three-column layout unchanged
  - [ ] Save draft / Clear draft / export blocker functional

---

## Before Production Launch

- [ ] Replace Portaly placeholder URL (`https://portaly.cc/kaola`) with live payment link
- [ ] Configure private redemption codes in private build (not in this public repo)

---

## v3.5.x Follow-up

- [ ] "Credits low" warning (balance = 1)
- [ ] Export count history in sidebar

## v4

- [ ] Batch mode (EP / Album)
- [ ] Server-side credit verification

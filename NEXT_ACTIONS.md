# NEXT ACTIONS — v3.5.0 REVISE8

**Status:** Code QA 41/41 PASS — pending real-device QA
**Date:** 2026-05-30

---

## Real Device QA (Immediate)

Deploy to Vercel and test on real devices:

**iOS Safari 390px:**
- [ ] Single-column flow — no horizontal scrolling required
- [ ] Propri floating cursor at bottom-right, 56px, bob animation
- [ ] Propri cursor does NOT cover input fields / buttons
- [ ] No Propi card or step list appearing as sidebars
- [ ] Lang switch (ZH/EN) in header, always visible
- [ ] Clear draft button visible alongside Save draft
- [ ] Form fields full width, no iOS zoom on focus
- [ ] Readiness summary cards below main form
- [ ] PDF/Print opens preview — no credit deducted
- [ ] JSON / Copy plain text still credit-gated (trial or balance)

**Android Chrome 430px:**
- [ ] Same checks as above

**Desktop Chrome > 900px:**
- [ ] Three-column layout unchanged (left sidebar, center form, right status)
- [ ] Propi floating cursor NOT visible
- [ ] Save / Clear draft functional
- [ ] Export gate intact

---

## Before Production Launch

- [ ] Replace Portaly placeholder URL with live payment link
- [ ] Configure private redemption codes in private build

---

## v3.5.x Follow-up

- [ ] Credits low warning (balance = 1)
- [ ] Export count history
- [ ] Propi floating cursor: optional tap to show current step hint

## v4

- [ ] Batch mode (EP / Album)
- [ ] Server-side credit verification
- [ ] True PDF download (not browser print)

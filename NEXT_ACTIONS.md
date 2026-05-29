# NEXT ACTIONS — v3.5.0 Checkpoint Candidate

**Current version:** v3.5.0 CreditGate PortalyMVP REVISE7e
**Status:** ✅ Manual QA Passed — GitHub-Ready Package Prepared
**Date:** 2026-05-29

---

## Immediate (Before Public Launch)

- [ ] Replace Portaly placeholder URL (`https://portaly.cc/kaola`) with real payment link
- [ ] Remove or rotate demo redeem codes before public source exposure
  - Demo redemption codes are removed from the public package. Configure private codes in a private build before deployment.
- [ ] Add `.gitignore` if any local files should be excluded from repo
- [ ] Confirm GitHub repo visibility (public / private) before push

---

## v3.5.x Follow-up (Credit System)

- [ ] Add credit purchase webhook / callback simulation (mock only, no real payment)
- [ ] Show export count history in sidebar credit card
- [ ] Add "credits low" warning when balance = 1
- [ ] Validate that Portaly payment → code delivery → in-app redeem flow works end-to-end (manual test)

---

## v4 Future Scope

- [ ] Batch mode (EP / Album) — currently shows "Coming in v4" placeholder
- [ ] Multi-track export — requires IndexedDB or backend
- [ ] Real backend credit verification (replace localStorage prototype)
- [ ] Server-side redeem code validation
- [ ] User accounts (optional — currently local-first by design)

---

## Known Intentional Design Choices (Not Bugs)

- "Step N of 8" eyebrow label: intentionally English in both language modes
- `AI_Music_Proof_of_Rights_` in filenames: intentionally English
- `Proof-of-Rights Document` in document title: intentionally English (product term)
- `propri` brand name: intentionally not translated
- `Local-First Archive` in JSON generator field: intentionally English
- Step 7 preview button: intentionally NOT credit-gated (preview ≠ export)

---

## Prototype Limitations (Documented — Not To Be Fixed in v3.5.x)

- localStorage credit gating is NOT production-secure (bypassable via DevTools)
- Demo codes are visible in source — demo only
- No server-side validation of redeem codes or credit balance
- No real payment integration (Portaly link is a placeholder)

# NEXT ACTIONS — v3.5.0 REVISE7f

**Status:** Code QA PASS — Mobile Visual QA Pending
**Date:** 2026-05-29

---

## Before Merging / Publishing

- [ ] **Mobile visual QA** — Open in Chrome DevTools at 390px and 430px:
  - Main form fields visible and fillable
  - No horizontal scrolling
  - Sidebar and status panel stacked below main content
  - Required `*` markers still visible
  - Save draft / Clear draft still functional
  - Desktop layout (> 900px) unaffected
- [ ] Replace Portaly placeholder URL (`https://portaly.cc/kaola`) with live payment link
- [ ] Configure private redemption codes in a private build (not in this public package)
- [ ] Confirm GitHub repo visibility (public / private) before push

---

## v3.5.x Follow-up

- [ ] Add "credits low" warning (balance = 1)
- [ ] Show export count history in sidebar
- [ ] Test full Portaly → code delivery → in-app redeem flow end-to-end

---

## v4 Future Scope

- [ ] Batch mode (EP / Album) — "Coming in v4" placeholder in current UI
- [ ] Multi-track export
- [ ] Server-side credit verification (replace localStorage prototype)

---

## Known Intentional Design Choices (Not Bugs)

- "Step N of 8" label: intentionally English in both languages
- `AI_Music_Proof_of_Rights_` in filenames: intentionally English
- `propri` brand name: not translated by design
- Step 7 preview: NOT credit-gated by design (preview ≠ export)
- `Local-First Archive` in JSON field: intentionally English

---

## Prototype Limitations (Not to Fix in v3.5.x)

- localStorage credit gating not production-secure (DevTools bypassable)
- No server-side validation of codes or balance
- Portaly link is placeholder only

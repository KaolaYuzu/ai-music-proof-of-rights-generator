# NEXT ACTIONS — v3.6.0 BetaRedeemAPI

**Status:** Code QA 36/36 PASS — pending real-device QA + Apps Script deployment
**Date:** 2026-05-30

---

## Apps Script Setup (private — required before beta launch)

- [ ] Create Google Sheet, add `codes` tab with 10-column schema
- [ ] Import `beta_codes_private_setup.csv` (PRIVATE — not in public repo)
- [ ] Open `google_apps_script/redeem_api.gs`, set `SHEET_ID`
- [ ] Deploy as Web App (Execute as: Me, Access: Anyone)
- [ ] Copy deployment URL → paste into `index.html` → `const REDEEM_API_URL = '...'`
- [ ] Test with GET ?action=ping → verify `{ ok: true }`
- [ ] Test with valid code → verify credits applied in frontend
- [ ] Test with invalid/exhausted/revoked code → verify correct error message

## Real Device QA

- [ ] Clear draft: form reset + Step 1 + toast + no reload of old data
- [ ] Step 7: "前往匯出 →" navigates to Step 8
- [ ] PDF preview: doc scrollable top to bottom on mobile
- [ ] Export PDF: charges 1 credit + triggers print
- [ ] JSON / Copy: still credit-gated
- [ ] Preview document: no credit deducted
- [ ] Desktop: three-column layout unchanged
- [ ] Redeem modal: email field visible, optional
- [ ] Redeem button disables during API call, re-enables after
- [ ] Buy button: shows 即將開放 for 3s (no navigation)

## Before Production Launch

- [ ] Confirm Apps Script deployment URL is in private build only
- [ ] Replace `buyCredits()` Coming soon → live Portaly URL when payment is ready
- [ ] Configure private redemption codes in private build

## v3.6.x / v4

- [ ] Credits low warning (balance = 1)
- [ ] True PDF download file generation (not browser print)
- [ ] Batch mode, server-side credit verification
- [ ] Rate limiting on Apps Script endpoint
- [ ] Email confirmation on redemption (Apps Script → Gmail)

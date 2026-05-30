# QA Log — v3.6.0 BetaRedeemAPI (PublicGitHubSafe)

**Version:** v3.6.0 BetaRedeemAPI · 2026-05-30
**Status:** Code QA 36/36 PASS · JS Syntax OK · Mobile Visual QA Pending (real device)

---

## Code QA — 36/36 PASS

| # | Check | |
|---|-------|-|
| V1 | v3.6.0 BetaRedeemAPI version string present | ✅ |
| V2b | brand-ver span shows v3.6.0 | ✅ |
| R1 | `const REDEEM_API_URL` present | ✅ |
| R2 | `YOUR_APPS_SCRIPT_DEPLOYMENT_URL` placeholder (not live URL) | ✅ |
| R3 | `async function redeemViaAPI` present | ✅ |
| R4 | `async function submitRedeem` (async keyword) | ✅ |
| R5 | `REDEEM_ERROR_MSG` map present (7 keys) | ✅ |
| R6 | `_setRedeemBtn` function present | ✅ |
| R7 | `btn.disabled = disabled` logic present | ✅ |
| R8 | `reEnableTimer` (3s anti-spam re-enable) present | ✅ |
| E1 | `id="rdm-email"` email input present in modal | ✅ |
| E2 | `type="email"` on email input | ✅ |
| E3 | `Optional` / `選填` bilingual placeholder text | ✅ |
| D1 | `DEMO_CODES = {}` (empty object, no codes) | ✅ |
| D2 | `DEMO_CODES[code] !== undefined` local fallback check present | ✅ |
| CS1 | `Coming soon` text present | ✅ |
| CS2 | `即將開放` text present | ✅ |
| CS3 | `buyCredits()` does NOT call `window.open(PORTALY_URL` | ✅ |
| P1 | `clearDraftNow()` preserved | ✅ |
| P2 | `goTo(1)` in clearDraftNow preserved | ✅ |
| P3 | `gatedExportPDF()` preserved | ✅ |
| P4 | `gatedExportJSON()` preserved | ✅ |
| P5 | `gatedCopyText()` preserved | ✅ |
| P6 | `#sb { display: none !important }` in mobile media query | ✅ |
| P7 | `propi-float` floating cursor present | ✅ |
| P8 | `overflow-y: auto !important` on doc overlay mobile | ✅ |
| P9 | `-webkit-overflow-scrolling` iOS scroll fix | ✅ |
| P10 | `saveDraftNow()` preserved | ✅ |
| P11 | `calcReady()` validation preserved | ✅ |
| SEC1 | STARTER-DEMO-6 absent | ✅ |
| SEC2 | CREATOR-DEMO-25 absent | ✅ |
| SEC3 | TEST-DEMO-20 absent | ✅ |
| SEC4 | PORTALY-BETA-xxx absent | ✅ |
| SEC5 | SKOOL-BETA-xxx absent | ✅ |
| JS | `node --check`: no syntax errors | ✅ |

---

## Mobile Visual QA — Pending (real device)

| Check | |
|-------|-|
| Clear draft: clears form + goes to Step 1 + toast | ☐ |
| Clear draft: page refresh does NOT reload old data | ☐ |
| Step 7: "前往匯出" button visible and navigates to Step 8 | ☐ |
| PDF preview: full document scrollable vertically | ☐ |
| Preview document: no credit deducted | ☐ |
| Export PDF: credit deducted + print triggered | ☐ |
| JSON / Copy: credit deducted | ☐ |
| Step 8: Clear draft button visible | ☐ |
| Desktop 900px+: three-column layout intact | ☐ |
| Redeem modal: email field visible below code field | ☐ |
| Redeem button: shows "驗證中…" during API call | ☐ |
| Redeem button: re-enables after response or 3s | ☐ |
| Buy credits button: shows "即將開放" for 3s | ☐ |
| Invalid code: shows ZH/EN error message | ☐ |
| Network error: shows network_error message | ☐ |
| Valid code (with real API): credits added + modal closes | ☐ |

---

## Public Safety Audit

| | |
|-|-|
| STARTER-DEMO-6 absent | ✅ |
| CREATOR-DEMO-25 absent | ✅ |
| TEST-DEMO-20 absent | ✅ |
| PORTALY-BETA-xxx absent | ✅ |
| SKOOL-BETA-xxx absent | ✅ |
| `DEMO_CODES = {}` | ✅ |
| No `.env` / secrets / node_modules / .DS_Store | ✅ |
| No Jennifer project files | ✅ |
| No beta_codes_private_setup.csv in public package | ✅ |
| `REDEEM_API_URL` is placeholder, not real URL | ✅ |

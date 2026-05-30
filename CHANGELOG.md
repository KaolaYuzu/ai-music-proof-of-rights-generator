# CHANGELOG

## v3.6.0 BetaRedeemAPI — 2026-05-30

### Phase 1 Redeem Backend (Google Apps Script)

**New: `google_apps_script/redeem_api.gs`**
Complete Google Apps Script `doPost()` handler. Validates redeem codes against a private Google Sheet.
- Reads code, max_uses, used_count, status, credits from Sheet
- Checks: invalid code → invalid_code; status=disabled/revoked → code_revoked; used_count ≥ max_uses → code_exhausted
- On success: increments used_count, sets status=exhausted if at max, logs email + redeemed_at timestamp
- Returns `{ ok: true, credits: N }` or `{ ok: false, reason: '...' }`
- CORS: returns JSON via ContentService
- Health check: GET ?action=ping returns `{ ok: true }`

**New: REDEEM_ERROR_MSG map (frontend)**
7 error codes with zh/en strings:
`missing_code / invalid_code / code_revoked / code_exhausted / already_redeemed / network_error / server_error`

**New: `redeemViaAPI(code, email)` async function**
Replaces the old synchronous `DEMO_CODES[code]` local validation.
Fetch POST to `REDEEM_API_URL`. Throws on HTTP error.

**New: `_setRedeemBtn(disabled)` function**
Disables/enables the redeem button with bilingual loading text ("驗證中… / Checking…").

**Updated: `submitRedeem()` → async**
- Local device duplicate check still runs first (localStorage `kaola_proof_redeemed_codes`)
- `DEMO_CODES[code]` local fallback: still checked (empty `{}` in public build; reserved for private config)
- API call: disables button → fetch → re-enables on response or after 3s auto-timeout
- On API success: applies credits to localStorage, shows toast, closes modal after 2.4s
- On API failure: shows reason-mapped error message in `#rdm-msg`
- On network error: shows network_error message

**New: Email optional input in redeem modal**
`<input id="rdm-email" type="email" placeholder="Email（選填 / Optional）">`
Email sent to API for logging. Not required. Not validated client-side.

**Updated: `buyCredits()` → Coming Soon**
No longer opens Portaly URL. Shows "Coming soon — 即將開放" on buy button for 3 seconds.
Gate modal buy button text → "購買點數（即將開放）" / "Buy Credits (Coming soon)".

**Constants:**
- `const REDEEM_API_URL = 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL';` — replace before deployment
- `const DEMO_CODES = {}` — kept as empty placeholder; codes never in public repo
- `const PORTALY_URL` — kept in source for internal reference; not called by `buyCredits()`

**Unchanged from REVISE8b:**
- REVISE8 mobile single-flow layout (#sb hidden)
- Propi floating cursor (56px, bottom-right, bob animation)
- Clear draft (clearDraftNow), Step 7 nav, PDF preview scrolling
- gatedExportPDF / gatedExportJSON / gatedCopyText
- Required field validation (Step 1 × 7, Step 4 × 10)
- Save draft / gateExport / CreditGate logic

---

## v3.5.0 REVISE8b — 2026-05-30 (Mobile Flow Hotfix — 3 bugs)
## v3.5.0 REVISE8 — 2026-05-30 (Mobile Single-Flow architecture)
## v3.5.0 REVISE7h — 2026-05-29 (Rejected — iOS swipe unreliable)
## v3.5.0 REVISE7g — 2026-05-29 (Rejected — iOS scroll lock)
## v3.5.0 REVISE7e — 2026-05-29 (Desktop checkpoint)

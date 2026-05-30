# AI Music Proof-of-Rights Generator

**Version:** v3.6.0 BetaRedeemAPI · 2026-05-30 · Local-First
**Status:** ✅ Code QA 36/36 PASS · JS Syntax OK · ⚠️ Mobile Visual QA Pending (real device)

---

## How to Open

Open `index.html` in Chrome. No server required. Keep `assets/` in the same folder.
For Vercel: deploy this folder as-is (index.html + assets/ + google_apps_script/).

---

## v3.6.0 BetaRedeemAPI — What's New

### Beta Redeem Code → Google Apps Script API

Redeem codes are now validated against a private Google Sheet via Google Apps Script (Phase 1 backend).

The public build ships with `const REDEEM_API_URL = 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL';`.
Replace this value with your deployed Web App URL before going live.

**Setup (private):**
1. Create a Google Sheet with a `codes` tab (see column schema in `google_apps_script/redeem_api.gs`)
2. Import beta codes from `beta_codes_private_setup.csv` (PRIVATE — not in this public package)
3. Open `redeem_api.gs` in Google Apps Script, set `SHEET_ID`, deploy as Web App
4. Paste the deployment URL into `index.html` → `const REDEEM_API_URL = '...'`

### Email Optional Input

The redeem modal now includes an optional email field (`id="rdm-email"`).
Email is sent to the Apps Script for logging purposes. It is not required.

### Anti-Spam Button Disable

The Redeem button is disabled during API call and auto-re-enables after 3 seconds (or on response).
This prevents double-submit.

### Buy Credits → Coming Soon

Payment link (Portaly) is not live yet. The buy button now shows "購買點數（即將開放）" / "Coming soon" and disables for 3 seconds when clicked.

---

## Export Logic

| Action | Credit charged? |
|---|---|
| 🔍 Preview document | **No** — preview only |
| 🖨 Export PDF (formal) | **Yes — 1 credit** |
| { } Download JSON archive | **Yes — 1 credit** |
| ⎘ Copy plain text report | **Yes — 1 credit** |

---

## Redeem API Error Messages

| reason | 中文 | English |
|--------|------|---------|
| `invalid_code` | 無效的兌換碼，請確認後再試。 | Invalid code. Please check and try again. |
| `code_revoked` | 此兌換碼已停用，請聯繫客服。 | This code has been revoked. Please contact support. |
| `code_exhausted` | 此兌換碼已達使用上限。 | This code has reached its usage limit. |
| `already_redeemed` | 此兌換碼已在本裝置使用過。 | This code has already been redeemed on this device. |
| `network_error` | 網路錯誤，請稍後再試。 | Network error. Please try again later. |
| `server_error` | 伺服器錯誤，請稍後再試。 | Server error. Please try again later. |

---

## Mobile Layout (from REVISE8)

- Left sidebar hidden. No horizontal scrolling.
- Propi floating cursor at bottom-right (56px, bob animation, no text).
- Language switch in header, always visible.
- Clear draft button in Step 8 nav.

---

## Commercial Logic (CreditGate)

- Free trial: 1 formal export
- Starter Pack: US$5 = 6 credits · Creator Pack: US$20 = 25 credits
- Payment: Coming soon (Portaly placeholder not live)
- Redemption codes: via Google Apps Script backend (not in this public package)

---

## File Structure

```
index.html
assets/propi/propri_main.png / propri_front.png / propri_focus.png / propri_side.png
google_apps_script/redeem_api.gs
```

**Not in this public package (private):**
- `beta_codes_private_setup.csv` — import to Google Sheet
- Real redemption codes

---

## Security Notes

- `DEMO_CODES = {}` — empty in public build. Codes only live in Google Sheet.
- `REDEEM_API_URL` must be set to your private Apps Script Web App URL.
- No `.env`, no credentials, no secrets in this repository.
- Credit gating is prototype-only (`localStorage`). Not secure for production monetization.

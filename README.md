# AI Music Proof-of-Rights Generator

**Version:** v3.5.0 CreditGate PortalyMVP — REVISE8b
**Date:** 2026-05-30
**Status:** ✅ Code QA 34/34 PASS · ⚠️ Mobile Visual QA Pending (real device)

---

## How to Open

Open `index.html` in Chrome. No server required. Keep `assets/` in the same folder.
For Vercel: deploy this folder as-is.

---

## REVISE8b — Mobile Flow Hotfix

Three bugs fixed from REVISE8:

**1. Clear draft (root cause: undefined `lang` variable)**
The `clearDraftNow()` function was calling `lang` (undefined) instead of `currentLang`, causing a silent ReferenceError. Fixed to use `currentLang`. Now also performs complete reset: clears localStorage, D object, all `[data-k]` fields, file chips, doc overlay, resets Propi state, navigates to Step 1, shows toast confirmation.

**2. Step 7 nav — "前往匯出" now prominent**
Step 7 nav restructured to: `← 返回 / 儲存草稿 / 前往匯出 →`. The "前往匯出" button is now the primary action in the nav row, not a secondary afterthought.

**3. PDF preview scrollable on mobile**
`#doc-overlay.show` on mobile changed from `display: flex` to `display: block` with `overflow-y: auto; -webkit-overflow-scrolling: touch`. `#proof-doc` gets `overflow: visible` on mobile. Full document is now vertically scrollable in the preview modal.

---

## Export Logic

| Action | Credit charged? |
|---|---|
| 🔍 Preview document | **No** — preview only |
| 🖨 Export PDF (formal) | **Yes — 1 credit** |
| { } Download JSON archive | **Yes — 1 credit** |
| ⎘ Copy plain text report | **Yes — 1 credit** |

Step 8 layout: Preview (free) → Export PDF (1 credit) → JSON (1 credit) → Copy (1 credit) → Clear draft → New track

---

## Mobile Layout (Single-Flow, from REVISE8)

- Left sidebar hidden. No horizontal scrolling.
- Propri floating cursor at bottom-right (56px, bob animation, no text).
- Language switch in header, always visible.
- Clear draft button in Step 8 nav.

---

## Commercial Logic (CreditGate)

- Free trial: 1 formal export
- Starter Pack: US$5 = 6 credits · Creator Pack: US$20 = 25 credits
- Payment: Portaly (`https://portaly.cc/kaola`) — replace before launch
- Redemption codes removed from this public package

---

## File Structure

```
index.html
assets/propi/propri_main.png / propri_front.png / propri_focus.png / propri_side.png
```

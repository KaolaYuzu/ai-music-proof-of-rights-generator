# CHANGELOG

## v3.5.0 REVISE8b — 2026-05-30

### Mobile Flow Hotfix (3 bugs from REVISE8)

**Bug 1 — Clear draft not working (root cause: `lang` undefined)**
`clearDraftNow()` referenced `lang` which is not a global variable (correct variable: `currentLang`). This caused a silent ReferenceError on every call, making the button appear to do nothing. Fixed + expanded:
- `lang` → `currentLang`
- Clears `propri_v346` from localStorage
- Resets `D = {}`
- Clears all `[data-k]` form fields (input/select/textarea/checkbox)
- Clears all `.fp-chip` file attachment chips
- Removes doc overlay if open
- Calls `setState('idle')` + `refreshPV()`
- Navigates to Step 1 via `goTo(1)`
- Shows toast: "草稿已清除。" / "Draft cleared."

**Bug 2 — Step 7 blocked (nav restructured)**
Step 7 navigation was `<div></div>` + "前往匯出" — the empty div made the layout confusing and on mobile the primary action was not obvious. Restructured to a clear 3-button row: `← 返回 / 儲存草稿 / 前往匯出 →`

**Bug 3 — PDF preview not scrollable on mobile**
`#doc-overlay.show` was `display: flex` which caused flex-container scroll issues on iOS Safari. Changed to `display: block` on mobile with explicit `overflow-y: auto; -webkit-overflow-scrolling: touch`. `#proof-doc` gets `overflow: visible; max-height: none` on mobile so full document content is accessible.

**Step 8 export restructure:**
- Added separate `🔍 預覽文件` button (free, calls `openDoc()`)
- Added `🖨 正式輸出 PDF` button (1 credit, calls `gatedExportPDF()`)
- `gatedExportPDF()`: gates credit → `openDoc()` + `setTimeout(print, 500ms)`
- JSON and Copy remain separately gated
- Clear draft + New track buttons in Step 8 nav

**Unchanged from REVISE8:**
- Mobile single-flow layout (#sb hidden, #pv below #mn)
- Propi floating cursor (56px, bottom-right, bob animation)
- Language switch in header
- Desktop three-column layout
- Required field validation (Step 1 × 7, Step 4 × 10)
- Save draft / CreditGate / gateExport logic
- afterprint NOT used for credit deduction

---

## v3.5.0 REVISE8 — 2026-05-30 (Mobile Single-Flow architecture)
## v3.5.0 REVISE7h — 2026-05-29 (Rejected — iOS swipe unreliable)
## v3.5.0 REVISE7g — 2026-05-29 (Rejected — iOS scroll lock)
## v3.5.0 REVISE7e — 2026-05-29 (Desktop checkpoint)

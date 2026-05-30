# QA Log — v3.5.0 REVISE8b (PublicGitHubSafe)

**Version:** v3.5.0 REVISE8b · 2026-05-30
**Status:** Code QA 34/34 PASS · JS syntax OK · Mobile Visual QA pending

---

## Code QA — 34/34 PASS

| # | Check | |
|---|-------|-|
| V1 | REVISE8b version string | ✅ |
| V2 | No REVISE8 (non-b) version string | ✅ |
| C1 | clearDraftNow uses `currentLang` (not `lang`) | ✅ |
| C2 | clearDraftNow calls `goTo(1)` | ✅ |
| C3 | clearDraftNow calls `setState('idle')` | ✅ |
| C4 | clearDraftNow clears `.fp-chip` | ✅ |
| C5 | clearDraftNow calls `toast()` | ✅ |
| C6 | clearDraftNow removes doc overlay | ✅ |
| S7A | Step 7 nav has `back(7)` | ✅ |
| S7B | Step 7 nav has `saveDraftNow()` | ✅ |
| S7C | Step 7 nav has `goTo(8)` | ✅ |
| PDF1 | `#doc-overlay.show`: `display: block` on mobile | ✅ |
| PDF2 | `overflow-y: auto !important` on mobile overlay | ✅ |
| PDF3 | `-webkit-overflow-scrolling: touch` on mobile | ✅ |
| PDF4 | `#proof-doc overflow: visible` on mobile | ✅ |
| S8A | Preview button calls `openDoc()` (free) | ✅ |
| S8B | `id="btn-exportPDF"` present | ✅ |
| S8C | `gatedExportPDF()` function present | ✅ |
| S8D | JSON uses `gatedExportJSON()` | ✅ |
| S8E | Copy uses `gatedCopyText()` | ✅ |
| S8F | Clear draft in Step 8 nav (`id="s8-btn-clear"`) | ✅ |
| S8G | Restart button present | ✅ |
| S8H | `gatedExportPDF` calls `gateExport` | ✅ |
| M1 | `#sb { display: none !important }` on mobile | ✅ |
| M2 | REVISE8 single-flow preserved | ✅ |
| SEC1 | STARTER-DEMO-6 absent | ✅ |
| SEC2 | CREATOR-DEMO-25 absent | ✅ |
| SEC3 | TEST-DEMO-20 absent | ✅ |
| SEC4 | `DEMO_CODES = {}` | ✅ |
| CORE1 | `calcReady()` validation present | ✅ |
| CORE2 | Red `*` markers | ✅ |
| CORE3 | `saveDraftNow()` present | ✅ |
| CORE4 | `gatedExportJSON()` present | ✅ |
| CORE5 | `gatedCopyText()` present | ✅ |
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

---

## Public Safety Audit

| | |
|-|-|
| STARTER-DEMO-6 absent | ✅ |
| CREATOR-DEMO-25 absent | ✅ |
| TEST-DEMO-20 absent | ✅ |
| `DEMO_CODES = {}` | ✅ |
| No `.env` / secrets / node_modules / .DS_Store | ✅ |
| No Jennifer project files | ✅ |

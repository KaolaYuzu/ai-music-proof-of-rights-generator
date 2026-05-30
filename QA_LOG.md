# QA Log — v3.5.0 REVISE8 (PublicGitHubSafe)

**Version:** v3.5.0 REVISE8 · 2026-05-30
**Status:** Code QA 41/41 PASS · JS syntax OK · Mobile Visual QA pending (real device)

---

## Code QA — 41/41 PASS

| # | Check | |
|---|-------|-|
| V1 | REVISE8 version string | ✅ |
| V2 | No REVISE7h version string | ✅ |
| M1 | REVISE8 mobile block present | ✅ |
| M2 | `#sb { display: none !important }` on mobile | ✅ |
| M3 | `.ws-scroll scroll-snap-type: none` on mobile | ✅ |
| M4 | `.ws-inner flex-direction: column` on mobile | ✅ |
| M5 | `#mn width: 100%` on mobile | ✅ |
| M6 | `#pv position: static` on mobile | ✅ |
| M7 | `.f2 grid-template-columns: 1fr` (single column) | ✅ |
| M8 | `font-size: 16px !important` on inputs | ✅ |
| M9 | `100svh` used | ✅ |
| M10 | No `html/body overflow:hidden` both axes | ✅ |
| F1 | `.propi-float` CSS present | ✅ |
| F2 | `id="propri-float"` HTML present | ✅ |
| F3 | `@keyframes propri-bob` animation | ✅ |
| F4 | Desktop: `.propi-float display:none` (min-width:901px) | ✅ |
| F5 | `propri_main.png` in float element | ✅ |
| L1 | `btn-lang` in `#hd` (before wsScroll) | ✅ |
| C1 | `clearDraftNow()` function present | ✅ |
| C2 | `id="btn-clear-draft"` button present | ✅ |
| C3 | `btn-clear-draft` i18n ZH: 清除草稿 | ✅ |
| C4 | `btn-clear-draft` i18n EN: Clear draft | ✅ |
| E1 | Preview button calls `openDoc()` | ✅ |
| E2 | Preview button NOT `gatedOpenDoc()` | ✅ |
| E3 | JSON uses `gatedExportJSON()` | ✅ |
| E4 | Copy uses `gatedCopyText()` | ✅ |
| E5 | `window.onafterprint` removed | ✅ |
| E6 | Preview button text: 預覽 / 列印文件 | ✅ |
| E7 | JSON button label: 正式輸出 | ✅ |
| E8 | Copy button label: 正式輸出 | ✅ |
| D1 | Desktop `.ws-scroll` / `.ws-inner` preserved | ✅ |
| D2 | Desktop `330px 1fr 330px` columns | ✅ |
| D3 | Desktop `"sb mn pv"` grid-areas | ✅ |
| S1 | STARTER-DEMO-6 absent | ✅ |
| S2 | CREATOR-DEMO-25 absent | ✅ |
| S3 | TEST-DEMO-20 absent | ✅ |
| S4 | `DEMO_CODES = {}` | ✅ |
| R1 | `calcReady()` validation present | ✅ |
| R2 | Red `*` markers present | ✅ |
| SD1 | `saveDraftNow()` present | ✅ |
| SD2 | `#save-draft-area` present | ✅ |
| JS  | `node --check`: no syntax errors | ✅ |

---

## Mobile Visual QA — Pending (real device)

| Check | |
|-------|-|
| iOS Safari 390px: single-column flow (no horizontal scroll needed) | ☐ |
| iOS Safari 390px: propri float visible at bottom-right, no text | ☐ |
| iOS Safari 390px: propri float does not cover input fields | ☐ |
| iOS Safari 390px: lang switch in header, always visible | ☐ |
| iOS Safari 390px: Clear draft button visible | ☐ |
| iOS Safari 390px: center form fields fillable (no zoom) | ☐ |
| iOS Safari 390px: readiness summary below form | ☐ |
| iOS Safari 390px: PDF/Print preview opens (no credit deducted) | ☐ |
| iOS Safari 390px: JSON/Copy still credit-gated | ☐ |
| Desktop (> 900px): three-column layout unchanged | ☐ |
| Desktop (> 900px): Save/Clear draft functional | ☐ |

---

## Public Safety Audit

| | |
|-|-|
| STARTER-DEMO-6 absent | ✅ |
| CREATOR-DEMO-25 absent | ✅ |
| TEST-DEMO-20 absent | ✅ |
| `DEMO_CODES = {}` | ✅ |
| No `.env` / secrets | ✅ |
| No `node_modules` / `.DS_Store` / `.zip` | ✅ |
| No Jennifer project files | ✅ |

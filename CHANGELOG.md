# CHANGELOG

## v3.5.0 REVISE8 — 2026-05-30

### Architecture Change: Mobile Single-Flow + Propi Floating Cursor

Real-device QA on REVISE7g and REVISE7h confirmed that horizontal workspace approaches are unreliable on iOS Safari. REVISE8 abandons horizontal workspace for mobile entirely.

**Mobile layout (≤ 900px):**
- Left sidebar (`#sb`) hidden via `display: none !important`
- `.ws-scroll` becomes `display: block` (no overflow-x, no scroll-snap)
- `.ws-inner` becomes `flex-direction: column` — stacks sb→mn→pv vertically
- `#mn` full width, normal vertical scroll
- `#pv` (readiness summary) shown below `#mn` as a static block
- No horizontal gesture required

**Propi floating cursor:**
- New `<div class="propi-float" id="propri-float">` fixed at `bottom: 24px; right: 16px`
- 56×56px, `propri_main.png`, circular drop-shadow
- `@keyframes propri-bob` — gentle 10px float every 3s
- `pointer-events: none` — does not intercept taps
- Hidden on desktop via `@media (min-width: 901px)`

**Language switch:** Already in `#hd` header — visible on mobile by default. No change required.

**Clear draft button (REVISE8 new):**
- `clearDraftNow()` function added — confirms, clears `propri_v346` localStorage, resets D object and all fields
- `#btn-clear-draft` added to `#save-draft-area` alongside Save draft
- i18n: `btn-clear-draft` → `清除草稿` / `Clear draft`
- `#save-draft-area` forced visible on mobile via CSS `display: flex !important`

**PDF/Print credit fix:**
- `btn-openDocFull` now calls `openDoc()` directly — no credit gate
- `window.onafterprint` removed from `openDoc()` — unreliable on mobile Safari
- JSON export (`gatedExportJSON()`) still credit-gated
- Copy plain text (`gatedCopyText()`) still credit-gated
- Button text updated: "預覽 / 列印文件" / "下載 JSON 存檔（正式輸出）" / "複製純文字報告（正式輸出）"

**Desktop unchanged:**
- `.ws-scroll { grid-area: ws; display: flex }` — desktop three-column intact
- `.ws-inner { grid-template-columns: 330px 1fr 330px }` — intact
- All REVISE7e core functions untouched

---

## v3.5.0 REVISE7h — 2026-05-29 (Rejected — iOS cannot swipe)

- Dedicated `.ws-scroll` wrapper as horizontal scroll container
- `html/body` not locked — but swipe still unreliable on iPhone Safari in testing

## v3.5.0 REVISE7g — 2026-05-29 (Rejected — iOS scroll lock)

- `html,body { overflow:hidden }` locked all touch scroll on iPhone

## v3.5.0 REVISE7f — 2026-05-29 (Rejected — propri clipped)

## v3.5.0 REVISE7e — 2026-05-29 (Desktop checkpoint)

- Step list internal scroll, required * markers, TBD date button

## v3.5.0 CreditGate PortalyMVP — 2026-05-27

- Credit system, Portaly link, export gate

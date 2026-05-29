# CHANGELOG

## v3.5.0 REVISE7e — 2026-05-29 (Checkpoint Candidate)

### Fixed

**Sidebar / Step-list Internal Scrolling**
- Left sidebar step-list card now scrolls independently via mousewheel
- Fix applied at `#sb > .glass` level (not `#app`) — overall page layout is not affected
- `#app` retains `min-height: 100vh`; no layout compression or 跑版
- propri mascot companion card remains fixed; only the step list card scrolls
- 4px webkit scrollbar visible in Chrome; `scrollbar-width: thin` for Firefox

**Work Identity Required Fields (Step 1)**
- All 7 fields now required before export: Track Title, Artist Name, Release Type, Version Name, Language, Genre & Mood, Release Date
- Red `*` markers added to all required labels
- Labels use inner-span i18n pattern — `*` markers survive language switching (zh ↔ en)
- Release Date: added "尚未確定" quick-fill button; field accepts free text including "尚未確定"
- `calcReady()` enforces Step 1 validation: returns `missing` if any required field is empty

**Ownership & Rights Required Fields (Step 4)**
- All 10 fields now required before export: Master Owner, Composition Owner, Lyricist, Composer, Producer, Performer, Featured Artist, Royalty Split, Sample Use, Cover Art Rights
- Red `*` markers added to all required labels with same inner-span i18n pattern
- Featured Artist: placeholder updated to "如無特邀藝人，請填 None / 無 / N/A"
- `calcReady()` enforces Step 4 validation after Step 1 passes
- Featured Artist set to None/無/N/A bypasses the Royalty Split highrisk check

### Confirmed Passing (unchanged from REVISE7c)

- **Save draft / Clear draft** — localStorage persistence fully functional
- **Empty export blocker** — PDF / JSON / Copy all blocked when fields empty or status not ready
- **CreditGate redemption codes** — Redeem UI and credit gate logic preserved; demo codes removed from public package
- **Credit trial / purchase flow** — Portaly payment link, redeem modal, balance display unchanged
- **Language switching** — zh ↔ en full i18n; `*` markers do not disappear on switch
- **propri companion** — PNG-based assets, CSS-only animation, no SVG redraw

---

## v3.5.0 REVISE7d — 2026-05-29 (Rejected — layout compression)

- Attempted `#app { height:100vh }` to fix sidebar scroll → caused layout 跑版
- Sidebar still did not scroll; rejected in manual QA
- Not published

---

## v3.5.0 REVISE7c — 2026-05-29

- Visual CSS patch (10 fixes): sidebar scroll attempt, button sizing, stepper labels, version readability
- Manual QA passed; used as source base for REVISE7e

---

## v3.5.0 REVISE7b — 2026-05-29

- UI layout patch (8 fixes): sidebar, nav row, stepper labels, header clarity

---

## v3.5.0 REVISE7a — 2026-05-29

- 9 fixes: Toast notifications, auto-resume draft on load, export lock behaviour

---

## v3.5.0 REVISE7 — 2026-05-27

- Initial CreditGate integration: trial / credit / redeem / Portaly URL / export gate

---

## v3.5.0 CreditGate PortalyMVP — 2026-05-27

- Credit system architecture: localStorage-based trial, balance, redeem whitelist
- Portaly payment link integration (placeholder)
- Export gate: `gateExport()` wraps all formal export actions

---

## v3.4.x series — 2026-05

- v3.4.8 RC1: Full QA audit, stability checkpoint
- v3.4.7: i18n completeness, terminology standardisation
- v3.4.6: Comprehensive STRINGS dict, full setLang() rewrite
- v3.4.5: TermPatch — terminology + favicon
- v3.4.4: Removed 文件摘要 / 匯出捷徑 from right sidebar
- v3.4.3: Bug fixes
- v3.4.2: Product logic patches (6 fixes)
- v3.4.1: UX patches (5 fixes)

---

## v3.4.0 — Typography + Local Attachment UX

---

## v3.3.0 — 10 UX Corrections

---

## v3.2.0 — Cinematic UI + propri Companion

---

## v3.0.0 — Initial prototype

- 8-step journal flow, document preview, export UI

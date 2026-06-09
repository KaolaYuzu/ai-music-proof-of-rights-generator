// api/export-pdf.js
// propri Official PDF Export — Vercel Serverless Function v1
// Uses html-pdf-node (Chromium-based) with embedded Google Fonts (Noto Sans TC)
// for CJK character support. No secrets in this file.

const htmlPdf = require('html-pdf-node');

// ── Simple in-memory rate limiter ─────────────────────────────────────────────
// State resets on cold start. Acceptable for v1 beta (no persistent storage).
const rateMap   = new Map();
const RATE_LIMIT  = 5;               // max requests per window per IP
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes in ms

function checkRateLimit(ip) {
  const now   = Date.now();
  let   entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_WINDOW };
  }
  entry.count++;
  rateMap.set(ip, entry);
  return entry.count <= RATE_LIMIT;
}

// ── Server-side i18n mirror of STRINGS in index.html ─────────────────────────
// Keep in sync with index.html STRINGS.zh / STRINGS.en.
const STRINGS = {
  zh: {
    'doc-s1': '1. 作品身份 Work Identity',
    'doc-s2': '2. 創作聲明 Creator Statement',
    'doc-s3': '3. 人類創作貢獻 Human Creative Contribution',
    'doc-s4': '4. AI 使用揭露 AI Usage Disclosure',
    'doc-s5': '5. 所有權聲明 Ownership Declaration',
    'doc-s6': '6. 證明文件清單 Evidence Archive',
    'doc-s7': '7. 發行前整備 Release Readiness',
    'dr-trackTitle': '曲名',        'dr-artistName': '演出者',
    'dr-releaseType': '發行類型',   'dr-versionName': '版本',
    'dr-language': '語言',          'dr-genre': '風格',
    'dr-releaseDate': '預計發行',
    'dr-creationMode': '創作模式',  'dr-inspiration': '靈感起源',
    'dr-ideaDate': '靈感時間',      'dr-production': '製作過程',
    'dr-artDirection': '情感方向',  'dr-humanDecisions': '創作決策記錄',
    'dr-humanControlConfirm': '創作者聲明',
    'dr-confirmed':   '✓ 最終版本由人工審核確認',
    'dr-unconfirmed': '（未確認）',
    'dr-aiTools': '使用工具',       'dr-aiParts': 'AI 用途說明',
    'dr-humanRevision': '人工修改說明',
    'dr-aiScope': 'AI 涉及範疇',    'dr-aiNone': '無',
    'dr-masterOwner': '母帶所有人', 'dr-compositionOwner': '曲目所有人',
    'dr-lyricist': '作詞者',        'dr-composer': '作曲者',
    'dr-producer': '製作人',        'dr-performer': '演出者',
    'dr-featured': '特邀藝人',      'dr-splitNotes': '版稅分配',
    'dr-artworkOwner': '封面版權',  'dr-sampleUse': '取樣狀態',
    'dr-agreementStatus': '協議狀態',
    'dr-masterFile': '母帶檔案名稱','dr-masterFormat': '音檔格式',
    'dr-masterFilePath': '保存位置','dr-masterNotes': '母帶備註',
    'dr-artworkFile': '封面圖',     'dr-lyricFile': '歌詞文件',
    'dr-agreementFile': '合作協議', 'dr-aiRecord': 'AI 生成記錄',
    'dr-distScreenshot': '發行截圖','dr-otherProof': '其他說明',
    'dr-distributor': '發行平台',
    'dr-isrcStatus': 'ISRC',        'dr-upcStatus': 'UPC',
    'dr-lyricsReady': '歌詞就緒',  'dr-coverReady': '封面就緒',
    'dr-aiDisclosureReady': 'AI 申報就緒',
    'dr-rightsProofReady': '版權就緒',
    'dr-yes': '✓', 'dr-no': '—',
    'ai-lyrics': '歌詞', 'ai-vocals': '人聲',
    'ai-composition': '作曲', 'ai-artwork': '封面圖',
    'cm-fully-human':           '完全人工創作',
    'cm-ai-assist':             '人工為主 + AI 輔助修改',
    'cm-ai-draft-human-rework': 'AI 初稿 + 人工大幅修改',
    'cm-ai-collab':             'AI 與人工深度共同創作',
    'cm-fully-ai':              '以 AI 工具為主協作',
    'ao-self':           '自行創作',
    'ao-ai-self':        '使用 AI 工具協作生成',
    'ao-licensed':       '授權使用（已取得授權）',
    'ao-needs-supplement':'需補件 / 暫不建議提交',
    'su-none':    '無取樣',
    'su-cleared': '有取樣，已清 sample',
    'su-uncleared':'有取樣，未清 sample ⚠',
    'su-unknown': '不確定',
    'as-all-signed':'所有協議已簽署',
    'as-verbal':  '口頭協議',
    'as-pending': '協議待簽',
    'as-na':      '不適用（個人作品）',
    'is-obtained':'已取得', 'is-pending':'申請中', 'is-na':'待處理',
    'doc-title-suffix':   ' — Proof-of-Rights Document',
    'doc-sub-unknown':    '未知演出者',
    'doc-generated':      '生成時間',
    'doc-id-label':       '文件編號',
    'doc-official-badge': '正式版本 — Official',
    'disclaimer-title':   '免責聲明',
    'disclaimer-body':
      '本文件由 propri AI Music Proof-of-Rights Generator 官方匯出服務生成，' +
      '文件編號：{docId}，生成時間：{timestamp}。' +
      '本文件所載內容由使用者自行輸入，propri 不對其正確性或完整性作任何保證。' +
      '本文件不構成法律建議，亦不代表任何版權登記或正式法律文件。' +
      '使用者應自行確認所有資訊並諮詢專業法律顧問。',
    'footer-text': 'propri · AI Music Proof-of-Rights Generator · propri.io',
  },
  en: {
    'doc-s1': '1. Work Identity',
    'doc-s2': '2. Creator Statement',
    'doc-s3': '3. Human Creative Contribution',
    'doc-s4': '4. AI Usage Disclosure',
    'doc-s5': '5. Ownership Declaration',
    'doc-s6': '6. Evidence Archive',
    'doc-s7': '7. Release Readiness',
    'dr-trackTitle': 'Track Title',       'dr-artistName': 'Artist',
    'dr-releaseType': 'Release Type',     'dr-versionName': 'Version',
    'dr-language': 'Language',            'dr-genre': 'Genre',
    'dr-releaseDate': 'Expected Release',
    'dr-creationMode': 'Creation Mode',   'dr-inspiration': 'Inspiration',
    'dr-ideaDate': 'Idea Started',        'dr-production': 'Production Notes',
    'dr-artDirection': 'Artistic Direction',
    'dr-humanDecisions': 'Human Creative Decisions',
    'dr-humanControlConfirm': 'Creator Declaration',
    'dr-confirmed':   '✓ Final version human-reviewed and confirmed',
    'dr-unconfirmed': '(not confirmed)',
    'dr-aiTools': 'AI Tools Used',        'dr-aiParts': 'AI Usage Description',
    'dr-humanRevision': 'Human Revision Notes',
    'dr-aiScope': 'AI Involvement Areas', 'dr-aiNone': 'None',
    'dr-masterOwner': 'Master Recording Owner',
    'dr-compositionOwner': 'Composition Owner',
    'dr-lyricist': 'Lyricist',   'dr-composer': 'Composer',
    'dr-producer': 'Producer',   'dr-performer': 'Performer',
    'dr-featured': 'Featured Artist',     'dr-splitNotes': 'Royalty Split',
    'dr-artworkOwner': 'Cover Art Rights','dr-sampleUse': 'Sample Status',
    'dr-agreementStatus': 'Agreement Status',
    'dr-masterFile': 'Master Filename',   'dr-masterFormat': 'Audio Format',
    'dr-masterFilePath': 'Storage Location','dr-masterNotes': 'Master Notes',
    'dr-artworkFile': 'Cover Art File',   'dr-lyricFile': 'Lyrics File',
    'dr-agreementFile': 'Agreement File', 'dr-aiRecord': 'AI Usage Record',
    'dr-distScreenshot': 'Distributor Screenshot',
    'dr-otherProof': 'Other Notes',       'dr-distributor': 'Distribution Platform',
    'dr-isrcStatus': 'ISRC',              'dr-upcStatus': 'UPC',
    'dr-lyricsReady': 'Lyrics Ready',     'dr-coverReady': 'Cover Art Ready',
    'dr-aiDisclosureReady': 'AI Disclosure Ready',
    'dr-rightsProofReady': 'Rights Proof Ready',
    'dr-yes': '✓', 'dr-no': '—',
    'ai-lyrics': 'Lyrics', 'ai-vocals': 'Vocals',
    'ai-composition': 'Composition', 'ai-artwork': 'Artwork',
    'cm-fully-human':           'Fully human',
    'cm-ai-assist':             'Human-led + AI-assisted',
    'cm-ai-draft-human-rework': 'AI draft + substantial human rework',
    'cm-ai-collab':             'Deep human-AI collaboration',
    'cm-fully-ai':              'AI-tool-led with human oversight',
    'ao-self':           'Created manually',
    'ao-ai-self':        'Created with AI assistance',
    'ao-licensed':       'Licensed use with permission',
    'ao-needs-supplement':'Needs documentation / Not recommended yet',
    'su-none':    'No samples',
    'su-cleared': 'Samples used, cleared',
    'su-uncleared':'Samples used, NOT cleared ⚠',
    'su-unknown': 'Uncertain',
    'as-all-signed':'All agreements signed',
    'as-verbal':  'Verbal agreement',
    'as-pending': 'Agreement pending',
    'as-na':      'Not applicable (solo work)',
    'is-obtained':'Obtained', 'is-pending':'In progress', 'is-na':'Pending',
    'doc-title-suffix':   ' — Proof-of-Rights Document',
    'doc-sub-unknown':    'Unknown Artist',
    'doc-generated':      'Generated',
    'doc-id-label':       'Document ID',
    'doc-official-badge': 'Official Export',
    'disclaimer-title':   'Disclaimer',
    'disclaimer-body':
      'This document was generated by propri AI Music Proof-of-Rights Generator ' +
      'Official Export Service on {timestamp}, Document ID: {docId}. ' +
      'The content is user-supplied; propri makes no representations as to its ' +
      'accuracy or completeness. This document does not constitute legal advice ' +
      'and is not a copyright registration or formal legal instrument. ' +
      'Users should verify all information and consult qualified legal counsel.',
    'footer-text': 'propri · AI Music Proof-of-Rights Generator · propri.io',
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function _s(lang, key) {
  const table = STRINGS[lang] || STRINGS.zh;
  return table[key] !== undefined ? table[key] : (STRINGS.zh[key] || '');
}

function escHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Renders a label-value row; returns empty string when value is falsy.
function dr(k, v) {
  if (!v) return '';
  return `<div class="doc-row"><span class="dk">${escHtml(k)}</span><span class="dv">${escHtml(String(v))}</span></div>`;
}

// ── HTML template ─────────────────────────────────────────────────────────────
function buildOfficialHTML(documentJSON, lang, documentId, timestamp) {
  const d    = documentJSON || {};
  const s    = (key) => _s(lang, key);
  const isZh = lang !== 'en';

  /* Human-readable timestamp */
  const tsDisplay = (() => {
    try {
      return new Date(timestamp).toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    } catch (e) {
      return String(timestamp || new Date().toISOString());
    }
  })();

  /* AI scope string */
  const aiParts = [
    d.aiLyrics      && s('ai-lyrics'),
    d.aiVocals      && s('ai-vocals'),
    d.aiComposition && s('ai-composition'),
    d.aiArtwork     && s('ai-artwork'),
  ].filter(Boolean);
  const sep   = isZh ? '、' : ', ';
  const aiStr = aiParts.length ? aiParts.join(sep) : s('dr-aiNone');

  /* Creation mode display map */
  const cmMap = {
    'fully-human':           s('cm-fully-human'),
    'ai-assist':             s('cm-ai-assist'),
    'ai-draft-human-rework': s('cm-ai-draft-human-rework'),
    'ai-collab':             s('cm-ai-collab'),
    'fully-ai':              s('cm-fully-ai'),
  };

  const y = s('dr-yes');
  const n = s('dr-no');

  /* Disclaimer text with placeholders resolved */
  const disclaimer = s('disclaimer-body')
    .replace('{docId}', documentId || '')
    .replace('{timestamp}', tsDisplay);

  /* Document title / subtitle */
  const docTitle = escHtml(
    (d.trackTitle ? d.trackTitle + s('doc-title-suffix') : 'Proof-of-Rights Document')
  );
  const docSub = escHtml(
    (d.artistName || s('doc-sub-unknown')) + (d.releaseType ? ' · ' + d.releaseType : '')
  );

  /* Select-value display maps */
  const aoMap = { self: s('ao-self'), 'ai-self': s('ao-ai-self'), licensed: s('ao-licensed'), 'needs-supplement': s('ao-needs-supplement') };
  const suMap = { none: s('su-none'), cleared: s('su-cleared'), uncleared: s('su-uncleared'), unknown: s('su-unknown') };
  const asMap = { 'all-signed': s('as-all-signed'), verbal: s('as-verbal'), pending: s('as-pending'), na: s('as-na') };
  const isMap = { obtained: s('is-obtained'), pending: s('is-pending'), na: s('is-na') };

  return `<!DOCTYPE html>
<html lang="${isZh ? 'zh-TW' : 'en'}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${docTitle}</title>
<!--
  Noto Sans TC is embedded via Google Fonts CDN.
  This font provides full CJK coverage and prevents rendering as empty boxes
  in Chromium-based PDF generators (html-pdf-node / Puppeteer).
  Requires internet access at PDF generation time.
-->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Base typography ── */
body {
  font-family: 'Noto Sans TC', -apple-system, 'Segoe UI', 'PingFang TC', sans-serif;
  font-size: 13px;
  line-height: 1.78;
  color: #1a1a2e;
  background: #ffffff;
}

/* ── Print page settings ── */
@page {
  size: A4;
  margin: 20mm 15mm 28mm 15mm;
}

/* ── Document header ── */
.doc-header {
  border-bottom: 2px solid #7A5CFF;
  padding-bottom: 14px;
  margin-bottom: 24px;
}
.doc-brand {
  font-size: 10px;
  color: #888;
  letter-spacing: .06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.doc-official-badge {
  display: inline-block;
  font-size: 10px;
  background: #7A5CFF;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: .05em;
  margin-left: 8px;
  vertical-align: middle;
}
.doc-maintitle {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.3;
  margin-bottom: 4px;
}
.doc-subtitle {
  font-size: 13px;
  color: #555;
  margin-bottom: 10px;
}
.doc-meta {
  font-size: 11px;
  color: #888;
}
.doc-meta-id {
  font-size: 11px;
  color: #7A5CFF;
  font-weight: 600;
  margin-top: 4px;
}

/* ── Sections ── */
.doc-section {
  margin-bottom: 20px;
  page-break-inside: avoid;
}
.doc-section h3 {
  font-size: 10.5px;
  font-weight: 700;
  color: #7A5CFF;
  text-transform: uppercase;
  letter-spacing: .08em;
  border-bottom: 1px solid rgba(122,92,255,.22);
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.doc-row {
  display: flex;
  gap: 10px;
  margin-bottom: 6px;
  font-size: 12.5px;
  page-break-inside: avoid;
}
.dk {
  color: #666;
  min-width: 148px;
  flex-shrink: 0;
  font-size: 11.5px;
}
.dv {
  color: #1a1a2e;
  flex: 1;
  word-break: break-word;
}

/* ── Disclaimer section ── */
.doc-disclaimer-section {
  margin-top: 26px;
  padding: 14px 16px;
  border: 1px solid #dde;
  border-radius: 6px;
  background: #f9f9ff;
  page-break-inside: avoid;
}
.doc-disclaimer-section h4 {
  font-size: 10.5px;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 8px;
}
.doc-disclaimer-section p {
  font-size: 11px;
  color: #888;
  line-height: 1.68;
}

/* ── Fixed footer — appears on every printed page ── */
.doc-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12mm;
  border-top: 1px solid #e8e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 8.5px;
  color: #bbb;
  background: #fff;
}
.footer-id { color: #7A5CFF; font-weight: 600; }
</style>
</head>
<body>

<!-- Fixed footer: rendered on every printed page -->
<div class="doc-footer">
  <span>${escHtml(s('footer-text'))}</span>
  <span class="footer-id">${escHtml(documentId || '')}</span>
  <span>${escHtml(tsDisplay)}</span>
</div>

<!-- Document content -->
<div class="doc-header">
  <div class="doc-brand">
    propri · Rights QA Journal v3.6.4
    <span class="doc-official-badge">${escHtml(s('doc-official-badge'))}</span>
  </div>
  <div class="doc-maintitle">${docTitle}</div>
  <div class="doc-subtitle">${docSub}</div>
  <div class="doc-meta">${escHtml(s('doc-generated'))}: ${escHtml(tsDisplay)}</div>
  <div class="doc-meta-id">${escHtml(s('doc-id-label'))}: ${escHtml(documentId || '')}</div>
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s1'))}</h3>
  ${dr(s('dr-trackTitle'),   d.trackTitle)}
  ${dr(s('dr-artistName'),   d.artistName)}
  ${dr(s('dr-releaseType'),  d.releaseType)}
  ${dr(s('dr-versionName'),  d.versionName)}
  ${dr(s('dr-language'),     d.language)}
  ${dr(s('dr-genre'),        d.genre)}
  ${dr(s('dr-releaseDate'),  d.releaseDate)}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s2'))}</h3>
  ${dr(s('dr-creationMode'),   cmMap[d.creationMode] || d.creationMode || '')}
  ${dr(s('dr-inspiration'),    d.inspiration)}
  ${dr(s('dr-ideaDate'),       d.ideaDate)}
  ${dr(s('dr-production'),     d.production)}
  ${dr(s('dr-artDirection'),   d.artDirection)}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s3'))}</h3>
  ${dr(s('dr-humanDecisions'),      d.humanDecisions)}
  ${dr(s('dr-humanControlConfirm'), d.humanControlConfirm ? s('dr-confirmed') : s('dr-unconfirmed'))}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s4'))}</h3>
  ${dr(s('dr-aiTools'),      d.aiTools || s('dr-aiNone'))}
  ${dr(s('dr-aiScope'),      aiStr)}
  ${dr(s('dr-aiParts'),      d.aiParts)}
  ${dr(s('dr-humanRevision'),d.humanRevision)}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s5'))}</h3>
  ${dr(s('dr-masterOwner'),      d.masterOwner)}
  ${dr(s('dr-compositionOwner'), d.compositionOwner)}
  ${dr(s('dr-lyricist'),         d.lyricist)}
  ${dr(s('dr-composer'),         d.composer)}
  ${dr(s('dr-producer'),         d.producer)}
  ${dr(s('dr-performer'),        d.performer)}
  ${dr(s('dr-featured'),         d.featured)}
  ${dr(s('dr-splitNotes'),       d.splitNotes)}
  ${dr(s('dr-artworkOwner'),     aoMap[d.artworkOwner]     || d.artworkOwner)}
  ${dr(s('dr-sampleUse'),        suMap[d.sampleUse]        || d.sampleUse)}
  ${dr(s('dr-agreementStatus'),  asMap[d.agreementStatus]  || d.agreementStatus)}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s6'))}</h3>
  ${dr(s('dr-masterFile'),      d.masterFile)}
  ${dr(s('dr-masterFormat'),    d.masterFormat)}
  ${dr(s('dr-masterFilePath'),  d.masterFilePath)}
  ${dr(s('dr-masterNotes'),     d.masterNotes)}
  ${dr(s('dr-artworkFile'),     d.artworkFile)}
  ${dr(s('dr-lyricFile'),       d.lyricFile)}
  ${dr(s('dr-agreementFile'),   d.agreementFile)}
  ${dr(s('dr-aiRecord'),        d.aiRecord)}
  ${dr(s('dr-distScreenshot'),  d.distScreenshot)}
  ${dr(s('dr-otherProof'),      d.otherProof)}
</div>

<div class="doc-section">
  <h3>${escHtml(s('doc-s7'))}</h3>
  ${dr(s('dr-distributor'),        d.distributor)}
  ${dr(s('dr-isrcStatus'),         isMap[d.isrcStatus]  || d.isrcStatus)}
  ${dr(s('dr-upcStatus'),          isMap[d.upcStatus]   || d.upcStatus)}
  ${dr(s('dr-lyricsReady'),        d.lyricsReady        ? y : n)}
  ${dr(s('dr-coverReady'),         d.coverReady         ? y : n)}
  ${dr(s('dr-aiDisclosureReady'),  d.aiDisclosureReady  ? y : n)}
  ${dr(s('dr-rightsProofReady'),   d.rightsProofReady   ? y : n)}
</div>

<div class="doc-disclaimer-section">
  <h4>${escHtml(s('disclaimer-title'))}</h4>
  <p>${escHtml(disclaimer)}</p>
</div>

</body>
</html>`;
}

// ── Main Vercel handler ───────────────────────────────────────────────────────
module.exports = async (req, res) => {
  // CORS — allow any origin (v1 beta; tighten to specific domain for production)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  // Rate limiting — extract first IP from x-forwarded-for (Vercel sets this)
  const rawIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const ip    = String(rawIp).split(',')[0].trim();
  if (!checkRateLimit(ip)) {
    res.status(429).json({
      error:   'rate_limit_exceeded',
      message: 'Too many requests. Please wait 10 minutes and try again.',
    });
    return;
  }

  // Vercel auto-parses application/json bodies
  const { documentJSON, lang = 'zh', documentId, timestamp } = req.body || {};

  // Input validation
  if (!documentJSON || typeof documentJSON !== 'object' || Array.isArray(documentJSON)) {
    res.status(400).json({ error: 'invalid_payload', message: 'documentJSON must be an object.' });
    return;
  }
  if (!documentJSON.trackTitle || !documentJSON.artistName) {
    res.status(400).json({
      error:   'missing_required_fields',
      message: 'documentJSON.trackTitle and documentJSON.artistName are required.',
    });
    return;
  }
  // Reject suspiciously large payloads (>200KB stringified)
  if (JSON.stringify(documentJSON).length > 200000) {
    res.status(413).json({ error: 'payload_too_large', message: 'documentJSON exceeds 200KB limit.' });
    return;
  }

  try {
    const html = buildOfficialHTML(documentJSON, lang, documentId, timestamp);

    const options = {
      format:          'A4',
      margin:          { top: '20mm', bottom: '25mm', left: '15mm', right: '15mm' },
      printBackground: true,
      // Allow Google Fonts CDN fetch for Noto Sans TC
      args:            ['--no-sandbox', '--disable-setuid-sandbox'],
    };

    const pdfBuffer = await htmlPdf.generatePdf({ content: html }, options);

    // Build safe filename
    const rawTitle = String(documentJSON.trackTitle || 'propri');
    const safeName = rawTitle
      // keep ASCII alphanum + common CJK + Hiragana/Katakana ranges
      .replace(/[^a-zA-Z0-9一-鿿぀-ヿ]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 30) || 'propri';
    const dateStr = new Date(timestamp || Date.now()).toISOString().slice(0, 10).replace(/-/g, '');
    const shortId = (String(documentId || 'EXPORT').split('-')[2]) || 'EXPORT';
    const filename = `propri_proof_${safeName}_${dateStr}_${shortId}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(pdfBuffer);

  } catch (err) {
    console.error('[propri export-pdf] Generation error:', err.message || err);
    res.status(500).json({
      error:   'generation_failed',
      message: 'PDF generation failed. Please try again.',
    });
  }
};

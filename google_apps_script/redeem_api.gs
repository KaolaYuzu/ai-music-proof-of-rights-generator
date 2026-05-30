/**
 * AI Music Proof-of-Rights Generator — Beta Redeem API
 * Version: v3.6.0 · 2026-05-30
 * Deploy as: Google Apps Script Web App
 *   Execute as: Me (your Google account)
 *   Who has access: Anyone
 *
 * Google Sheet schema (one sheet named "codes"):
 *   A: code          B: source         C: credits   D: max_uses
 *   E: used_count    F: status         G: assigned_to (optional)
 *   H: email         I: redeemed_at    J: notes
 *
 * Setup steps:
 *   1. Create a Google Sheet. Note the Spreadsheet ID from its URL.
 *   2. Add a sheet tab named exactly: codes
 *   3. Add the header row in row 1 (see column schema above).
 *   4. Import your 10 beta codes from beta_codes_private_setup.csv (PRIVATE — do NOT commit).
 *   5. Open this script in Apps Script, paste the Spreadsheet ID into SHEET_ID below.
 *   6. Deploy → New deployment → Web App. Copy the deployment URL.
 *   7. Paste the deployment URL into index.html → const REDEEM_API_URL = '...';
 *
 * SECURITY NOTE:
 *   This script does NOT require authentication on the request itself.
 *   Security relies on: (a) code secrecy, (b) max_uses limit, (c) status flag.
 *   Do NOT add GOOGLE_PRIVATE_KEY or any credentials to this file.
 */

// ── Configuration ──────────────────────────────────────────────
var SHEET_ID   = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your Spreadsheet ID
var SHEET_NAME = 'codes';
var SHEET_COLS = {
  code:        1,  // A
  source:      2,  // B
  credits:     3,  // C
  max_uses:    4,  // D
  used_count:  5,  // E
  status:      6,  // F
  assigned_to: 7,  // G
  email:       8,  // H
  redeemed_at: 9,  // I
  notes:       10  // J
};

// ── CORS helper ────────────────────────────────────────────────
function _corsHeaders() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── OPTIONS preflight (CORS) ───────────────────────────────────
function doGet(e) {
  // Health-check endpoint: GET ?action=ping
  if (e && e.parameter && e.parameter.action === 'ping') {
    return _json({ ok: true, message: 'Redeem API is live.' });
  }
  return _json({ ok: false, reason: 'method_not_allowed' });
}

// ── Main entry point ───────────────────────────────────────────
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var code  = (body.code  || '').toString().trim().toUpperCase();
    var email = (body.email || '').toString().trim().toLowerCase();

    // Basic input validation
    if (!code) {
      return _json({ ok: false, reason: 'missing_code' });
    }

    // Open sheet
    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      return _json({ ok: false, reason: 'server_error', detail: 'Sheet not found' });
    }

    var data     = sheet.getDataRange().getValues();
    var foundRow = -1;
    var rowData  = null;

    // Skip header row (index 0 = row 1)
    for (var i = 1; i < data.length; i++) {
      var rowCode = (data[i][SHEET_COLS.code - 1] || '').toString().trim().toUpperCase();
      if (rowCode === code) {
        foundRow = i + 1; // 1-indexed sheet row
        rowData  = data[i];
        break;
      }
    }

    if (foundRow === -1) {
      return _json({ ok: false, reason: 'invalid_code' });
    }

    // Extract fields
    var status    = (rowData[SHEET_COLS.status    - 1] || '').toString().trim().toLowerCase();
    var maxUses   = parseInt(rowData[SHEET_COLS.max_uses   - 1], 10) || 1;
    var usedCount = parseInt(rowData[SHEET_COLS.used_count - 1], 10) || 0;
    var credits   = parseInt(rowData[SHEET_COLS.credits    - 1], 10) || 0;

    // Check status
    if (status === 'disabled' || status === 'revoked') {
      return _json({ ok: false, reason: 'code_revoked' });
    }
    if (status === 'exhausted' || usedCount >= maxUses) {
      return _json({ ok: false, reason: 'code_exhausted' });
    }
    if (credits <= 0) {
      return _json({ ok: false, reason: 'server_error', detail: 'Invalid credit value' });
    }

    // Apply redemption — update sheet
    var newUsedCount = usedCount + 1;
    var newStatus    = newUsedCount >= maxUses ? 'exhausted' : 'active';
    var now          = new Date().toISOString();

    sheet.getRange(foundRow, SHEET_COLS.used_count).setValue(newUsedCount);
    sheet.getRange(foundRow, SHEET_COLS.status).setValue(newStatus);
    sheet.getRange(foundRow, SHEET_COLS.email).setValue(email || '');
    sheet.getRange(foundRow, SHEET_COLS.redeemed_at).setValue(now);

    // Return success
    return _json({
      ok:      true,
      credits: credits,
      reason:  'redeemed'
    });

  } catch (err) {
    return _json({ ok: false, reason: 'server_error', detail: err.toString() });
  }
}

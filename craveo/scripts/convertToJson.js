const fs = require('fs');
const path = 'data/resList.json';
const s = fs.readFileSync(path, 'utf8');

function extractArrayLiteral(src, marker) {
  const idx = src.indexOf(marker);
  if (idx === -1) return null;
  let i = src.indexOf('[', idx);
  if (i === -1) return null;
  let depth = 0;
  let inStr = false;
  let strChar = '';
  let esc = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) {
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === strChar) { inStr = false; strChar = ''; continue; }
      continue;
    } else {
      if (ch === '"' || ch === "'") { inStr = true; strChar = ch; continue; }
      if (ch === '[') depth++; 
      else if (ch === ']') {
        depth--;
        if (depth === 0) return src.slice(src.indexOf('[', idx), i + 1);
      }
    }
  }
  return null;
}

try {
  const arrLiteral = extractArrayLiteral(s, 'restaurantList');
  if (!arrLiteral) throw new Error('Could not find restaurantList array literal');
  let arr;
  eval('arr = ' + arrLiteral);
  if (!Array.isArray(arr)) throw new Error('Extracted value is not an array');
  fs.writeFileSync(path, JSON.stringify(arr, null, 2), 'utf8');
  console.log('Converted to valid JSON successfully.');
} catch (err) {
  console.error('Conversion failed:', err.message);
  process.exit(1);
}

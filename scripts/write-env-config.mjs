/**
 * Writes public/env-config.js for runtime config on static hosts.
 * Reads process.env first (CI/Netlify/Vercel), then .env locally.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const KEYS = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
  'VITE_EMAILJS_PUBLIC_KEY',
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_ADMIN_TEMPLATE_ID',
  'VITE_ADMIN_EMAIL',
  'VITE_UAH_PER_USD',
  'VITE_GA_MEASUREMENT_ID',
];

function parseDotEnv(content) {
  const out = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

function loadDotEnv() {
  try {
    return parseDotEnv(readFileSync(resolve(process.cwd(), '.env'), 'utf8'));
  } catch {
    return {};
  }
}

const fileEnv = loadDotEnv();
const payload = {};
for (const key of KEYS) {
  payload[key] = process.env[key] || fileEnv[key] || '';
}

const required = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];
const missing = required.filter((k) => !payload[k]);
if (missing.length > 0) {
  console.warn(
    '[write-env-config] Missing required keys (forms will not work until set):',
    missing.join(', ')
  );
}

const outPath = resolve(process.cwd(), 'public/env-config.js');
const body = `// Auto-generated — do not edit on server; set vars in host dashboard or .env and rebuild.\nwindow.__ENV__ = ${JSON.stringify(payload, null, 2)};\n`;
writeFileSync(outPath, body, 'utf8');
console.log('[write-env-config] Wrote', outPath);

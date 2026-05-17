/** Runtime keys injected via `/env-config.js` when Vite env is missing on the host build. */
const VITE_KEYS = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
  'VITE_EMAILJS_PUBLIC_KEY',
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_ADMIN_TEMPLATE_ID',
  'VITE_ADMIN_EMAIL',
  'VITE_UAH_PER_USD',
  'VITE_GA_MEASUREMENT_ID',
] as const;

export type ViteEnvKey = (typeof VITE_KEYS)[number];

declare global {
  interface Window {
    __ENV__?: Partial<Record<ViteEnvKey, string>>;
  }
}

/** Vite build-time value, with fallback to `window.__ENV__` from `/env-config.js`. */
export function env(key: ViteEnvKey): string {
  const fromVite = import.meta.env[key];
  if (typeof fromVite === 'string' && fromVite.length > 0) return fromVite;
  const fromRuntime = typeof window !== 'undefined' ? window.__ENV__?.[key] : undefined;
  return typeof fromRuntime === 'string' ? fromRuntime : '';
}

export function isEnvConfigured(key: ViteEnvKey): boolean {
  return env(key).length > 0;
}

// Utility for conditional class names (shadcn/ui standard)
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

export const SITE_ORIGIN = 'https://prefabhomes.com.ua';

/** Відображуваний номер телефону на сайті. */
export const SITE_PHONE_DISPLAY = '+380 67 245 9977';

/** `href` для tel: посилань. */
export const SITE_PHONE_TEL = 'tel:+380672459977';

/** Контактна електронна пошта. */
export const SITE_EMAIL = 'perfab.ua@gmail.com';

export const SITE_EMAIL_MAILTO = `mailto:${SITE_EMAIL}`;

const DEFAULT_UAH_PER_USD = 42;

/** Hryvnia per 1 USD — set `VITE_UAH_PER_USD` in env to match your rate. */
export function getUahPerUsd(): number {
  const raw = import.meta.env.VITE_UAH_PER_USD;
  const n = typeof raw === 'string' && raw !== '' ? Number(raw) : NaN;
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_UAH_PER_USD;
}

/** Convert stored catalog amount (UAH) to approximate USD for display. */
export function uahToUsd(amountUah: number): number {
  return amountUah / getUahPerUsd();
}

/** Convert user-entered USD to UAH for storage / legacy rows (integer). */
export function usdToUah(usd: number): number {
  return Math.round(usd * getUahPerUsd());
}

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/** Display a catalog or DB price stored in UAH as USD. */
export function formatUsdFromUah(amountUah: number): string {
  return usdFormatter.format(uahToUsd(amountUah));
}

/** Display a number already in USD (e.g. form input). */
export function formatUsdAmount(usd: number): string {
  return usdFormatter.format(usd);
}

/** Display floor area in square metres (use {@link getHouseTotalAreaSqm} for catalog houses). */
export function formatAreaSqm(meters: number): string {
  const s = Number(meters).toLocaleString('uk-UA', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return `${s} м²`;
}

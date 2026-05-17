/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_ADMIN_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_CLIENT_TEMPLATE_ID: string;
  readonly VITE_ADMIN_EMAIL: string;
  /** Optional: UAH per 1 USD for price display (default 42). */
  readonly VITE_UAH_PER_USD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

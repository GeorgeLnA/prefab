// Copy to env-config.js on the server ONLY if you upload a dist/ built without env vars.
// Prefer: set VITE_* in your host dashboard and run `npm run build` there.
window.__ENV__ = {
  VITE_SUPABASE_URL: 'https://YOUR_PROJECT.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'your_key',
  VITE_EMAILJS_PUBLIC_KEY: '',
  VITE_EMAILJS_SERVICE_ID: '',
  VITE_EMAILJS_ADMIN_TEMPLATE_ID: '',
  VITE_ADMIN_EMAIL: 'perfab.ua@gmail.com',
  VITE_UAH_PER_USD: '42',
  VITE_GA_MEASUREMENT_ID: 'G-VRFQSX71WS',
};

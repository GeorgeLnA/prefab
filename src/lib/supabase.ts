import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from './env';

const url = env('VITE_SUPABASE_URL');
const anonKey = env('VITE_SUPABASE_ANON_KEY');

let client: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  return url.length > 0 && anonKey.length > 0;
}

/** Supabase client — only when `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set at build time. */
export function getSupabase(): SupabaseClient {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }
  if (!client) {
    client = createClient(url, anonKey);
  }
  return client;
}

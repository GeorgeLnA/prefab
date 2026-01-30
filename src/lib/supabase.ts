import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (client) return client;
  const baseUrl = typeof url === 'string' && url.length > 0 ? url : 'https://placeholder.supabase.co';
  const key = typeof anonKey === 'string' && anonKey.length > 0 ? anonKey : 'placeholder-anon-key';
  client = createClient(baseUrl, key);
  return client;
}

export const supabase = getClient();

export function isSupabaseConfigured(): boolean {
  return typeof url === 'string' && url.length > 0 && typeof anonKey === 'string' && anonKey.length > 0;
}

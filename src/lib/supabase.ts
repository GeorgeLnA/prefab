import { createClient } from '@supabase/supabase-js';

/** Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env when connecting Supabase. */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

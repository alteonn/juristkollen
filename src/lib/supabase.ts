import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'x-application-name': 'juristkollen'
    }
  }
});

// Error handling for Supabase operations
export const handleSupabaseError = (error: any): string => {
  console.error('Supabase error:', error);
  
  if (error?.message) {
    return error.message;
  }
  
  return 'Ett oväntat fel uppstod. Försök igen senare.';
};
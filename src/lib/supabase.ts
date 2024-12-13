import { createClient } from '@supabase/supabase-js';
import { getEnvConfig } from './config/env';

const { supabaseUrl, supabaseAnonKey } = getEnvConfig();

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

export const handleSupabaseError = (error: any): string => {
  console.error('Supabase error:', error);
  
  if (error?.message) {
    return error.message;
  }
  
  return 'Ett oväntat fel uppstod. Försök igen senare.';
};
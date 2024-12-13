interface EnvConfig {
    supabaseUrl: string;
    supabaseAnonKey: string;
    zapierWebhookUrl: string;
  }
  
  export const getEnvConfig = (): EnvConfig => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const zapierWebhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
  
    if (!supabaseUrl || !supabaseAnonKey || !zapierWebhookUrl) {
      throw new Error('Missing required environment variables');
    }
  
    return {
      supabaseUrl,
      supabaseAnonKey,
      zapierWebhookUrl
    };
  };
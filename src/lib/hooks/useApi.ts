import { useState, useCallback } from 'react';
import { handleError } from '../utils/errorHandling';
import { APP_CONFIG } from '../constants';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

export function useApi<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const request = useCallback(async (endpoint: string, options?: ApiOptions): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
        method: options?.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers
        },
        body: options?.body ? JSON.stringify(options.body) : undefined
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const error = handleError(err);
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, loading, error };
}
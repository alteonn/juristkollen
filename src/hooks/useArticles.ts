import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Article } from '../types/article';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (fetchError) {
        throw new Error('Failed to fetch articles');
      }

      setArticles(data || []);
    } catch (err) {
      console.error('Error in useArticles:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { articles, loading, error, refetch: fetchArticles };
}
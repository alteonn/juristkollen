import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Article } from '../types/article';

export function useArticle(slug: string | undefined) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('articles')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (fetchError) {
          throw new Error('Failed to fetch article');
        }

        setArticle(data);
      } catch (err) {
        console.error('Error in useArticle:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return { article, loading, error };
}
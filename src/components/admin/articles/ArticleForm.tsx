import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/Button';
import { GlassCard } from '../../ui/GlassCard';
import { supabase } from '../../../lib/supabase';
import { ArticleBasicInfo } from './ArticleBasicInfo';
import { ArticleImageUpload } from './ArticleImageUpload';
import { ArticleContent } from './ArticleContent';
import { ArticlePublishToggle } from './ArticlePublishToggle';
import { Article } from '../../../types/article';

interface ArticleFormProps {
  article?: Article;
  onCancel: () => void;
  onComplete?: () => void;
}

export function ArticleForm({ article, onCancel, onComplete }: ArticleFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    excerpt: '',
    image_url: '',
    published: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        category: article.category || '',
        content: article.content || '',
        excerpt: article.excerpt || '',
        image_url: article.image_url || '',
        published: article.published || false
      });
    }
  }, [article]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      if (article) {
        const { error } = await supabase
          .from('articles')
          .update({
            ...formData,
            slug,
            published_at: formData.published ? new Date().toISOString() : null
          })
          .eq('id', article.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('articles')
          .insert([{
            ...formData,
            slug,
            published_at: formData.published ? new Date().toISOString() : null
          }]);

        if (error) throw error;
      }
      
      onComplete?.();
      onCancel();
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard>
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="secondary"
          className="p-2"
          onClick={onCancel}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-semibold">
          {article ? 'Redigera artikel' : 'Skapa ny artikel'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <ArticleBasicInfo 
          formData={formData}
          onChange={setFormData}
        />

        <ArticleImageUpload 
          imageUrl={formData.image_url}
          onImageChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
        />

        <ArticleContent 
          content={formData.content}
          onChange={(content) => setFormData(prev => ({ ...prev, content }))}
        />

        <ArticlePublishToggle 
          published={formData.published}
          onChange={(published) => setFormData(prev => ({ ...prev, published }))}
        />

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
          >
            Avbryt
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sparar...' : (article ? 'Spara ändringar' : 'Skapa artikel')}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
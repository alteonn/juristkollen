import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { supabase } from '../../lib/supabase';
import { marked } from 'marked';
import { uploadFile } from '../../lib/uploadFile';

interface ArticleFormProps {
  article?: any;
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
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

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

  useEffect(() => {
    setPreview(marked(formData.content));
  }, [formData.content]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setIsUploading(true);

    try {
      // Create a unique filename using timestamp and original extension
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get the public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('article-images')
        .getPublicUrl(fileName);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

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

  const categories = [
    'Avtalsrätt',
    'Arbetsrätt',
    'Familjerätt',
    'Brottmål',
    'Fastighetsrätt',
    'Skatterätt',
    'Företagsjuridik',
    'Konsumenträtt'
  ];

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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Titel *</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Kategori *</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            >
              <option value="">Välj kategori</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Utdrag *</label>
          <textarea
            name="excerpt"
            required
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Omslagsbild (valfritt)</label>
          <div className="flex items-center gap-4">
            {formData.image_url && (
              <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                <img
                  src={formData.image_url}
                  alt="Article cover"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                  className="absolute top-2 right-2 p-1 bg-white/80 rounded-full 
                           hover:bg-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            )}
            <label className="flex items-center gap-2 px-4 py-3 bg-white/50 rounded-xl 
                           border border-secondary hover:bg-secondary/20 cursor-pointer 
                           transition-colors">
              {isUploading ? (
                <span>Laddar upp...</span>
              ) : (
                <>
                  <ImageIcon className="w-5 h-5" />
                  <span>Välj bild</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Innehåll (Markdown) *</label>
            <textarea
              name="content"
              required
              value={formData.content}
              onChange={handleInputChange}
              rows={20}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Förhandsvisning</label>
            <div 
              className="prose prose-sm max-w-none h-[600px] overflow-y-auto p-4 bg-white/50 rounded-xl border border-secondary"
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
            className="rounded border-secondary focus:ring-[#646cea]"
          />
          <label htmlFor="published" className="text-sm font-medium">
            Publicera artikel
          </label>
        </div>

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
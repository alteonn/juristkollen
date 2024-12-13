import { useState, useEffect } from 'react';
import { Edit2, Trash2, Search, Plus } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { ArticleForm } from './ArticleForm';

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingArticle, setEditingArticle] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Är du säker på att du vill ta bort denna artikel?')) return;

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingArticle(null);
    setIsCreating(true);
  };

  const handleComplete = () => {
    setEditingArticle(null);
    setIsCreating(false);
    fetchArticles();
  };

  const filteredArticles = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (editingArticle || isCreating) {
    return (
      <ArticleForm 
        article={editingArticle}
        onCancel={() => {
          setEditingArticle(null);
          setIsCreating(false);
        }}
        onComplete={handleComplete}
      />
    );
  }

  if (loading) {
    return (
      <GlassCard>
        <div className="text-center py-8 text-muted-foreground">
          Laddar artiklar...
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Sök på titel eller kategori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
          />
        </div>
        <Button
          variant="primary"
          onClick={handleCreate}
          className="flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Skapa artikel
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredArticles.map((article: any) => (
          <GlassCard key={article.id} className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <span className="px-2 py-1 bg-secondary/50 rounded-full text-xs">
                  {article.category}
                </span>
                {article.published && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Publicerad
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="secondary" 
                className="p-2"
                onClick={() => handleEdit(article)}
              >
                <Edit2 className="w-5 h-5" />
              </Button>
              <Button 
                variant="secondary" 
                className="p-2 hover:bg-red-50 hover:text-red-600"
                onClick={() => handleDelete(article.id)}
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          </GlassCard>
        ))}

        {filteredArticles.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Inga artiklar hittades
          </div>
        )}
      </div>
    </div>
  );
}
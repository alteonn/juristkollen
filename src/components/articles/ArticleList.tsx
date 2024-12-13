import { Clock } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { getCategoryIcon, getCategoryColor } from '../../utils/articleIcons';
import { Article } from '../../types/article';
import { useNavigate } from 'react-router-dom';

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

export function ArticleList({ articles, loading }: ArticleListProps) {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Laddar artiklar...
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Inga artiklar hittades
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {articles.map((article) => {
        const CategoryIcon = getCategoryIcon(article.category);
        const categoryColor = getCategoryColor(article.category);
        const readingTime = Math.ceil(article.content.split(' ').length / 200); // 200 words per minute

        return (
          <GlassCard 
            key={article.id}
            className="flex flex-col md:flex-row gap-6 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate(`/artiklar/${article.slug}`)}
          >
            <div className="w-full md:w-64 h-48 bg-secondary/30 rounded-xl flex-shrink-0">
              {article.image_url ? (
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: `${categoryColor}10` }}
                >
                  <CategoryIcon 
                    className="w-16 h-16"
                    style={{ color: categoryColor }}
                  />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${categoryColor}20`,
                    color: categoryColor
                  }}
                >
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min läsning</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(article.published_at).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-4 leading-tight">
                {article.title}
              </h2>

              <p className="text-muted-foreground mb-6">
                {article.excerpt}
              </p>

              <Button 
                variant="secondary" 
                className="group"
              >
                Läs artikel
              </Button>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { getCategoryIcon, getCategoryColor } from '../utils/articleIcons';
import { useArticles } from '../hooks/useArticles';
import { useNavigate } from 'react-router-dom';

export function Articles() {
  const { articles, loading, error } = useArticles();
  const navigate = useNavigate();

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Laddar artiklar...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="text-center">
            <p className="text-lg text-red-600">Ett fel uppstod vid laddning av artiklar</p>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Inga artiklar tillgängliga</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Aktuella artiklar</h2>
          <p className="text-xl text-muted-foreground">
            Håll dig uppdaterad med de senaste juridiska nyheterna och expertanalyser
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const CategoryIcon = getCategoryIcon(article.category);
            const categoryColor = getCategoryColor(article.category);

            return (
              <GlassCard 
                key={article.id} 
                className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  {article.image_url ? (
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover"
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
                  <span 
                    className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${categoryColor}20`,
                      color: categoryColor
                    }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{new Date(article.published_at).toLocaleDateString('sv-SE')}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 leading-tight">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {article.excerpt}
                </p>

                <Button 
                  variant="secondary" 
                  className="mt-auto group"
                  onClick={() => navigate(`/artiklar/${article.slug}`)}
                >
                  Läs artikel
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
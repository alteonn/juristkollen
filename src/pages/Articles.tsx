import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ArticleSearch } from '../components/articles/ArticleSearch';
import { ArticleList } from '../components/articles/ArticleList';
import { ArticleFilters } from '../components/articles/ArticleFilters';
import { useArticles } from '../hooks/useArticles';
import { useNavigate } from 'react-router-dom';

export function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { articles, loading, error } = useArticles();
  const navigate = useNavigate();

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title="Juridiska artiklar och nyheter"
        description="Läs de senaste juridiska artiklarna och nyheterna inom olika rättsområden. Håll dig uppdaterad om juridiska frågor och förändringar."
      />
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Juridiska artiklar och nyheter
            </h1>
            <p className="text-xl text-muted-foreground">
              Håll dig uppdaterad med de senaste juridiska nyheterna och expertanalyser
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-64 flex-shrink-0">
                <ArticleFilters 
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>

              <div className="flex-1">
                <ArticleSearch 
                  value={searchTerm}
                  onChange={setSearchTerm}
                />

                <ArticleList 
                  articles={filteredArticles}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
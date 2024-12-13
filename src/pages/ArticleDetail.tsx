import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { getCategoryIcon } from '../utils/articleIcons';
import { useArticle } from '../hooks/useArticle';
import { ArticleHeader } from '../components/articles/ArticleHeader';
import { ArticleContent } from '../components/articles/ArticleContent';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { article, loading, error } = useArticle(slug);

  const handleBack = () => {
    navigate('/artiklar');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
        <Navbar />
        <main className="py-24">
          <div className="container">
            <LoadingSpinner />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
        <Navbar />
        <main className="py-24">
          <div className="container">
            <div className="text-center">
              <p className="text-lg text-red-600">Artikeln kunde inte hittas</p>
              <Button 
                variant="secondary" 
                className="mt-8"
                onClick={handleBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till artiklar
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <Button
            variant="secondary"
            className="mb-12 flex items-center gap-2"
            onClick={handleBack}
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till artiklar
          </Button>

          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <ArticleHeader article={article} />
              <ArticleContent content={article.content} />
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
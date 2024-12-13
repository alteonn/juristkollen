import { Clock } from 'lucide-react';
import { getCategoryIcon } from '../../utils/articleIcons';
import { Article } from '../../types/article';

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const CategoryIcon = getCategoryIcon(article.category);
  const readingTime = Math.ceil(article.content.split(' ').length / 200); // 200 words per minute

  return (
    <div className="mb-12">
      {article.image_url ? (
        <div className="h-96 -mx-6 -mt-6 mb-8 relative">
          <img 
            src={article.image_url} 
            alt={article.title}
            className="w-full h-full object-cover rounded-t-[24px]"
          />
        </div>
      ) : (
        <div className="h-96 -mx-6 -mt-6 mb-8 rounded-t-[24px] flex items-center justify-center bg-[#646cea]/5">
          <CategoryIcon className="w-32 h-32 text-[#646cea]" />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#646cea]/10 text-[#646cea]">
          {article.category}
        </span>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{readingTime} minuters läsning</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {new Date(article.published_at).toLocaleDateString('sv-SE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        {article.title}
      </h1>

      <p className="text-xl text-muted-foreground">
        {article.excerpt}
      </p>
    </div>
  );
}
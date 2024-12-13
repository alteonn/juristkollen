import { marked } from 'marked';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Configure marked for better formatting
  marked.setOptions({
    breaks: true,
    gfm: true
  });

  // Custom renderer for better styling
  const renderer = new marked.Renderer();
  
  renderer.heading = (text, level) => {
    const sizes = {
      2: 'text-3xl font-bold mt-12 mb-6',
      3: 'text-2xl font-bold mt-8 mb-4',
      4: 'text-xl font-bold mt-6 mb-3'
    };
    const className = sizes[level] || '';
    return `<h${level} class="${className}">${text}</h${level}>`;
  };

  renderer.paragraph = (text) => {
    return `<p class="text-lg text-muted-foreground mb-6 leading-relaxed">${text}</p>`;
  };

  renderer.list = (body, ordered) => {
    const type = ordered ? 'ol' : 'ul';
    return `<${type} class="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">${body}</${type}>`;
  };

  renderer.listitem = (text) => {
    return `<li class="leading-relaxed">${text}</li>`;
  };

  renderer.blockquote = (quote) => {
    return `<blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg">${quote}</blockquote>`;
  };

  const html = marked(content, { renderer });

  return (
    <div 
      className="prose prose-lg max-w-none article-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
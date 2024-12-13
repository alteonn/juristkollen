import { marked } from 'marked';
import { useState, useEffect } from 'react';

interface ArticleContentProps {
  content: string;
  onChange: (content: string) => void;
}

export function ArticleContent({ content, onChange }: ArticleContentProps) {
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(marked(content));
  }, [content]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium">Innehåll (Markdown) *</label>
        <textarea
          name="content"
          required
          value={content}
          onChange={(e) => onChange(e.target.value)}
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
  );
}
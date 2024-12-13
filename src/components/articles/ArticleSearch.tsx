import { Search } from 'lucide-react';

interface ArticleSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ArticleSearch({ value, onChange }: ArticleSearchProps) {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Sök på titel eller innehåll..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-xl border border-secondary 
                 focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
      />
    </div>
  );
}
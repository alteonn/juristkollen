import { Search } from 'lucide-react';

interface GlossarySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function GlossarySearch({ value, onChange }: GlossarySearchProps) {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Sök på juridiska termer..."
        className="w-full pl-12 pr-4 py-4 bg-white/50 rounded-xl border border-secondary 
                 focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
      />
    </div>
  );
}
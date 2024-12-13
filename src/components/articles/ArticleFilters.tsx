import { GlassCard } from '../ui/GlassCard';

interface ArticleFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ArticleFilters({ selectedCategory, onCategoryChange }: ArticleFiltersProps) {
  const categories = [
    'Avtalsrätt',
    'Arbetsrätt',
    'Familjerätt',
    'Brottmål',
    'Fastighetsrätt',
    'Skatterätt',
    'Företagsjuridik',
    'Konsumenträtt'
  ];

  return (
    <GlassCard>
      <h2 className="text-lg font-semibold mb-4">Kategorier</h2>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            !selectedCategory 
              ? 'bg-[#646cea] text-white' 
              : 'hover:bg-[#646cea]/10'
          }`}
        >
          Alla kategorier
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === category 
                ? 'bg-[#646cea] text-white' 
                : 'hover:bg-[#646cea]/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
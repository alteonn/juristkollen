import { MapPin, Briefcase, Users, Scale } from 'lucide-react';

interface SearchSuggestion {
  type: 'partner' | 'city' | 'specialty' | 'member';
  text: string;
  subtext?: string;
  image?: string;
}

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
  onSelect: (suggestion: SearchSuggestion) => void;
  visible: boolean;
}

export function SearchSuggestions({ suggestions, onSelect, visible }: SearchSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;

  const getIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'partner':
        return <Scale className="w-4 h-4 text-[#646cea]" />;
      case 'city':
        return <MapPin className="w-4 h-4 text-[#646cea]" />;
      case 'specialty':
        return <Briefcase className="w-4 h-4 text-[#646cea]" />;
      case 'member':
        return <Users className="w-4 h-4 text-[#646cea]" />;
      default:
        return null;
    }
  };

  const getLabel = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'partner':
        return 'Advokatbyrå';
      case 'city':
        return 'Stad';
      case 'specialty':
        return 'Specialområde';
      case 'member':
        return 'Jurist';
      default:
        return '';
    }
  };

  return (
    <div 
      className="fixed left-0 right-0 bg-white shadow-2xl rounded-xl border border-secondary/50 overflow-hidden" 
      style={{ 
        zIndex: 9999,
        maxHeight: '60vh',
        overflowY: 'auto',
        top: '100%',
        marginTop: '0.5rem'
      }}
    >
      {suggestions.map((suggestion, index) => (
        <button
          key={`${suggestion.type}-${suggestion.text}-${index}`}
          className="w-full px-4 py-3 flex items-center gap-4 hover:bg-[#646cea]/5 transition-colors text-left"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion.image ? (
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary/30 flex-shrink-0">
              <img
                src={suggestion.image}
                alt=""
                className={`w-full h-full ${suggestion.type === 'partner' ? 'object-contain p-2' : 'object-cover'}`}
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-[#646cea]/10 flex items-center justify-center flex-shrink-0">
              {getIcon(suggestion.type)}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">{suggestion.text}</div>
            {suggestion.subtext && (
              <div className="text-sm text-muted-foreground truncate">{suggestion.subtext}</div>
            )}
          </div>

          <div className="text-xs text-muted-foreground flex-shrink-0 bg-secondary/30 px-3 py-1.5 rounded-full">
            {getLabel(suggestion.type)}
          </div>
        </button>
      ))}
    </div>
  );
}
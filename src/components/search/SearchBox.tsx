import { Search } from 'lucide-react';
import { SearchSuggestions } from './SearchSuggestions';
import { useSearchSuggestions } from '../../hooks/useSearchSuggestions';
import { Partner } from '../../types/partner';
import { useState, useRef, useEffect } from 'react';

interface SearchBoxProps {
  value?: string;
  onChange?: (value: string) => void;
  partners?: Partner[];
  onFilterChange?: (type: string, value: string) => void;
  placeholder?: string;
  showSuggestions?: boolean;
}

export function SearchBox({ 
  value = '', 
  onChange = () => {}, 
  partners = [], 
  onFilterChange = () => {},
  placeholder = "Sök på namn, specialitet eller stad...",
  showSuggestions = false
}: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const suggestions = useSearchSuggestions(searchTerm, partners);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    onChange(newValue);
  };

  const handleSuggestionSelect = (suggestion: any) => {
    setSearchTerm(suggestion.text);
    onChange(suggestion.text);
    setIsFocused(false);
    onFilterChange(suggestion.type, suggestion.text);
  };

  return (
    <div ref={containerRef} className="relative flex-1">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          className="w-full pl-12 pr-4 py-4 bg-white/50 rounded-xl border border-secondary 
                   focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
        />
      </div>

      {showSuggestions && isFocused && searchTerm.length > 0 && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2">
          <SearchSuggestions
            suggestions={suggestions}
            onSelect={handleSuggestionSelect}
            visible={true}
          />
        </div>
      )}
    </div>
  );
}
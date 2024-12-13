import { useState, useEffect, useMemo } from 'react';
import { Partner } from '../types/partner';

interface SearchSuggestion {
  type: 'partner' | 'city' | 'specialty' | 'member';
  text: string;
  subtext?: string;
  image?: string;
}

export function useSearchSuggestions(
  searchTerm: string,
  partners: Partner[],
  debounceMs: number = 300
) {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs]);

  return useMemo(() => {
    if (!debouncedTerm.trim()) {
      return [];
    }

    const term = debouncedTerm.toLowerCase();
    const results: SearchSuggestion[] = [];
    const seen = new Set<string>();

    // Search in partners
    partners.forEach(partner => {
      if (partner.name.toLowerCase().includes(term) && !seen.has(`partner-${partner.name}`)) {
        results.push({
          type: 'partner',
          text: partner.name,
          subtext: partner.city,
          image: partner.logo
        });
        seen.add(`partner-${partner.name}`);
      }

      // Search in team members
      partner.team_members?.forEach(member => {
        if (member.name.toLowerCase().includes(term) && !seen.has(`member-${member.name}`)) {
          results.push({
            type: 'member',
            text: member.name,
            subtext: `${member.role} - ${partner.name}`,
            image: member.photo
          });
          seen.add(`member-${member.name}`);
        }
      });

      // Search in specialties within this partner
      partner.specialties.forEach(specialty => {
        if (specialty.toLowerCase().includes(term) && !seen.has(`specialty-${specialty}`)) {
          results.push({
            type: 'specialty',
            text: specialty,
            subtext: `${partner.name}`
          });
          seen.add(`specialty-${specialty}`);
        }
      });
    });

    return results.slice(0, 8); // Limit to 8 suggestions
  }, [debouncedTerm, partners]);
}
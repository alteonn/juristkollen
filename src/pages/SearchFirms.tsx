import { useState, useEffect } from 'react';
import { Filter, Scale } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { supabase } from '../lib/supabase';
import { Partner } from '../types/partner';
import { SearchBox } from '../components/search/SearchBox';
import { PartnerCard } from '../components/partners/PartnerCard';

interface SearchFilters {
  city: string;
  specialties: string[];
  languages: string[];
}

export function SearchFirms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    city: '',
    specialties: [],
    languages: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<string[]>([]);
  const [allSpecialties, setAllSpecialties] = useState<string[]>([]);
  const [allLanguages, setAllLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('name');

      if (error) throw error;

      if (data) {
        setPartners(data);

        const uniqueCities = Array.from(new Set(data.map(p => p.city))).sort();
        const uniqueSpecialties = Array.from(
          new Set(data.flatMap(p => p.specialties))
        ).sort();
        const uniqueLanguages = Array.from(
          new Set(data.flatMap(p => p.languages))
        ).sort();

        setCities(uniqueCities);
        setAllSpecialties(uniqueSpecialties);
        setAllLanguages(uniqueLanguages);
      }
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (type: string, value: string) => {
    switch (type) {
      case 'city':
        setFilters(prev => ({ ...prev, city: value }));
        break;
      case 'specialty':
        setFilters(prev => ({
          ...prev,
          specialties: [value]
        }));
        break;
      default:
        break;
    }
  };

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         partner.team_members?.some(m => 
                           m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           m.role.toLowerCase().includes(searchTerm.toLowerCase())
                         );

    const matchesCity = !filters.city || partner.city === filters.city;
    const matchesSpecialties = filters.specialties.length === 0 ||
                              filters.specialties.every(s => partner.specialties.includes(s));
    const matchesLanguages = filters.languages.length === 0 ||
                            filters.languages.every(l => partner.languages.includes(l));

    return matchesSearch && matchesCity && matchesSpecialties && matchesLanguages;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sök bland Sveriges ledande advokatbyråer
            </h1>
            <p className="text-xl text-muted-foreground">
              Hitta rätt juridisk expertis för dina behov
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <GlassCard>
              <div className="flex flex-col md:flex-row gap-4">
                <SearchBox
                  value={searchTerm}
                  onChange={setSearchTerm}
                  partners={partners}
                  onFilterChange={handleFilterChange}
                />
                <Button
                  variant="secondary"
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5" />
                  Filter
                </Button>
              </div>

              {showFilters && (
                <div className="mt-6 pt-6 border-t border-secondary grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Stad</label>
                    <select
                      value={filters.city}
                      onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                      className="w-full px-4 py-2 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="">Alla städer</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Specialområden</label>
                    <select
                      multiple
                      value={filters.specialties}
                      onChange={(e) => setFilters({
                        ...filters,
                        specialties: Array.from(e.target.selectedOptions, option => option.value)
                      })}
                      className="w-full px-4 py-2 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      {allSpecialties.map((specialty) => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Språk</label>
                    <select
                      multiple
                      value={filters.languages}
                      onChange={(e) => setFilters({
                        ...filters,
                        languages: Array.from(e.target.selectedOptions, option => option.value)
                      })}
                      className="w-full px-4 py-2 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      {allLanguages.map((language) => (
                        <option key={language} value={language}>{language}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>

          {loading ? (
            <div className="text-center py-12 text-muted-foreground">
              Laddar byråer...
            </div>
          ) : filteredPartners.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Inga byråer hittades med de valda filtren
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          )}
        </div>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}
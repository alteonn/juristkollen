import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { supabase } from '../lib/supabase';
import { Partner } from '../types/partner';
import { SearchBox } from '../components/search/SearchBox';
import { LawyerCard } from '../components/lawyers/LawyerCard';

interface SearchFilters {
  city: string;
  specialties: string[];
  languages: string[];
}

export function SearchLawyers() {
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

  const filteredLawyers = partners.flatMap(partner => 
    (partner.team_members || []).map(member => ({
      ...member,
      partnerName: partner.name,
      partnerLogo: partner.logo,
      partnerCity: partner.city,
      partnerSpecialties: partner.specialties,
      partnerLanguages: partner.languages,
      partnerId: partner.id
    }))
  ).filter(lawyer => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = 
      lawyer.name.toLowerCase().includes(searchTermLower) ||
      lawyer.role.toLowerCase().includes(searchTermLower) ||
      lawyer.partnerName.toLowerCase().includes(searchTermLower) ||
      lawyer.partnerCity.toLowerCase().includes(searchTermLower) ||
      lawyer.partnerSpecialties.some(s => s.toLowerCase().includes(searchTermLower));

    const matchesCity = !filters.city || lawyer.partnerCity === filters.city;
    const matchesSpecialties = filters.specialties.length === 0 ||
                              filters.specialties.every(s => lawyer.partnerSpecialties.includes(s));
    const matchesLanguages = filters.languages.length === 0 ||
                            filters.languages.every(l => lawyer.partnerLanguages.includes(l));

    return matchesSearch && matchesCity && matchesSpecialties && matchesLanguages;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sök bland Sveriges främsta jurister
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
                  placeholder="Sök på namn, specialitet eller stad..."
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
              Laddar jurister...
            </div>
          ) : filteredLawyers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Inga jurister hittades med de valda filtren
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredLawyers.map((lawyer, index) => (
                <LawyerCard key={`${lawyer.partnerId}-${index}`} lawyer={lawyer} />
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
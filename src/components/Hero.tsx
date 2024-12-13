import { useState, useEffect } from 'react';
import { Search, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { SearchBox } from './search/SearchBox';
import { supabase } from '../lib/supabase';
import { Partner } from '../types/partner';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partners, setPartners] = useState<Partner[]>([]);
  const navigate = useNavigate();

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
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const handleFilterChange = (type: string, value: string) => {
    switch (type) {
      case 'partner':
        navigate(`/partners/${partners.find(p => p.name === value)?.id}`);
        break;
      case 'member':
        const partner = partners.find(p => 
          p.team_members?.some(m => m.name === value)
        );
        if (partner) {
          navigate(`/partners/${partner.id}`);
        }
        break;
      case 'city':
        navigate(`/search-firms?city=${encodeURIComponent(value)}`);
        break;
      case 'specialty':
        navigate(`/search-firms?specialty=${encodeURIComponent(value)}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-secondary via-background to-background overflow-hidden min-h-screen pt-48">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <div className="gradient-text">Hitta rätt jurist</div>
            <div className="mt-4 sm:mt-6">för dina juridiska behov</div>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto px-4">
            Vi matchar dig med erfarna jurister som specialiserar sig inom ditt område. Jämför och välj den bästa lösningen för dig.
          </p>

          <div className="max-w-2xl mx-auto px-4">
            <GlassCard className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <SearchBox
                  value={searchTerm}
                  onChange={setSearchTerm}
                  partners={partners}
                  onFilterChange={handleFilterChange}
                  showSuggestions={true}
                />
                <Button 
                  variant="primary" 
                  className="md:w-auto w-full"
                  onClick={() => navigate('/search-lawyers')}
                >
                  Sök jurist <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </GlassCard>
            
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => navigate('/get-help')}
            >
              Begär offert från jurister
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
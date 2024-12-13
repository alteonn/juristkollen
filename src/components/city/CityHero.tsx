import { MapPin, Search, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { SearchBox } from '../search/SearchBox';
import { CityStats } from './CityStats';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Partner } from '../../types/partner';

interface CityHeroProps {
  title: string;
  description: string;
  cityName: string;
}

export function CityHero({ title, description, cityName }: CityHeroProps) {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPartners();
  }, [cityName]);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('city', cityName);

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-secondary via-background to-background overflow-hidden min-h-screen pt-48">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#646cea] mb-6 px-4 py-2 rounded-full bg-[#646cea]/10">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{cityName}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto px-4">
            {description}
          </p>

          <div className="max-w-2xl mx-auto px-4">
            <GlassCard className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <SearchBox
                  value={searchTerm}
                  onChange={setSearchTerm}
                  partners={partners}
                  placeholder={`Sök jurister i ${cityName}...`}
                  citySpecific={true}
                  cityName={cityName}
                />
                <Button 
                  variant="primary" 
                  className="md:w-auto w-full"
                  onClick={() => navigate(`/search-lawyers?city=${encodeURIComponent(cityName)}`)}
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
              Begär offert från jurister i {cityName}
            </Button>
          </div>
        </div>

        <CityStats cityName={cityName} />
      </div>
    </div>
  );
}
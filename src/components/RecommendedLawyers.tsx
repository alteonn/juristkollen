import { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { supabase, handleSupabaseError } from '../lib/supabase';
import { Partner } from '../types/partner';
import { useNavigate } from 'react-router-dom';

export function RecommendedLawyers() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('featured', true)
        .order('featured_order', { ascending: true })
        .limit(6);

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      const errorMessage = handleSupabaseError(error);
      setError(errorMessage);
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rekommenderade byråer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upptäck våra noggrant utvalda advokatbyråer med bevisad expertis och gedigen erfarenhet.
            </p>
          </div>
          <div className="text-center text-muted-foreground">
            Laddar rekommenderade byråer...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rekommenderade byråer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rekommenderade byråer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upptäck våra noggrant utvalda advokatbyråer med bevisad expertis och gedigen erfarenhet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <GlassCard key={partner.id} className="flex flex-col h-full">
              <div className="relative h-48 bg-secondary/30 rounded-xl overflow-hidden mb-6">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain p-6"
                  />
                ) : null}
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{partner.name}</h3>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{partner.city}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {partner.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground mb-6">
                {partner.description}
              </p>

              <Button 
                variant="secondary" 
                className="mt-auto group"
                onClick={() => navigate(`/partners/${partner.id}`)}
              >
                Läs mer om byrån
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="primary" 
            withArrow
            onClick={() => navigate('/search-firms')}
          >
            Visa alla byråer
          </Button>
        </div>
      </div>
    </section>
  );
}
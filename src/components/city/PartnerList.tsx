import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { PartnerCard } from '../partners/PartnerCard';
import { Partner } from '../../types/partner';

interface PartnerListProps {
  cityName: string;
}

export function PartnerList({ cityName }: PartnerListProps) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, [cityName]);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('city', cityName)
        .order('name');

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Laddar byråer...
      </div>
    );
  }

  if (partners.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Inga byråer hittades i {cityName}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  );
}
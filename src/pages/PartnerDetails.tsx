import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Partner } from '../types/partner';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/ContactForm';
import { PartnerHeader } from '../components/partners/PartnerHeader';
import { PartnerSpecialties } from '../components/partners/PartnerSpecialties';
import { PartnerLanguages } from '../components/partners/PartnerLanguages';
import { PartnerContact } from '../components/partners/PartnerContact';
import { PartnerTeam } from '../components/partners/PartnerTeam';

export function PartnerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartner();
  }, [id]);

  const fetchPartner = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPartner(data);
    } catch (error) {
      console.error('Error fetching partner:', error);
      navigate('/search-firms');
    } finally {
      setLoading(false);
    }
  };

  if (loading || !partner) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
        <Navbar />
        <div className="container py-24">
          <div className="text-center text-muted-foreground">
            {loading ? 'Laddar information...' : 'Byrån kunde inte hittas'}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container max-w-6xl">
          <Button
            variant="secondary"
            className="mb-12 flex items-center gap-2"
            onClick={() => navigate('/search-firms')}
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till sök
          </Button>

          <div className="space-y-12">
            <GlassCard>
              <PartnerHeader partner={partner} />
              <div className="space-y-8 mt-8">
                <PartnerSpecialties specialties={partner.specialties} />
                <PartnerLanguages languages={partner.languages} />
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold mb-8">Kontaktuppgifter</h2>
              <PartnerContact 
                email={partner.email}
                phone={partner.phone}
                website={partner.website}
              />
            </GlassCard>

            {partner.team_members && partner.team_members.length > 0 && (
              <GlassCard>
                <h2 className="text-2xl font-bold mb-8">Vårt team</h2>
                <PartnerTeam members={partner.team_members} />
              </GlassCard>
            )}
          </div>
        </div>

        <div className="mt-24">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
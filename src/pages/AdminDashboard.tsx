import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Users, Building, MapPin, Globe, FileText, Languages, UserPlus, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { PartnerForm } from '../components/admin/PartnerForm';
import { PartnerList } from '../components/admin/PartnerList';
import { ArticleList } from '../components/admin/ArticleList';
import { supabase } from '../lib/supabase';

type AdminView = 'partners' | 'articles';

interface DashboardStats {
  partnersCount: number;
  lawyersCount: number;
  citiesCount: number;
  specialtiesCount: number;
}

export function AdminDashboard() {
  const { user } = useAuth();
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [currentView, setCurrentView] = useState<AdminView>('partners');
  const [stats, setStats] = useState<DashboardStats>({
    partnersCount: 0,
    lawyersCount: 0,
    citiesCount: 0,
    specialtiesCount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch partners data
      const { data: partners, error: partnersError } = await supabase
        .from('partners')
        .select('id, city, specialties, team_members');

      if (partnersError) throw partnersError;

      // Calculate stats
      const uniqueCities = new Set(partners?.map(p => p.city) || []);
      const uniqueSpecialties = new Set(partners?.flatMap(p => p.specialties) || []);
      const totalLawyers = partners?.reduce((sum, p) => sum + (p.team_members?.length || 0), 0) || 0;

      setStats({
        partnersCount: partners?.length || 0,
        lawyersCount: totalLawyers,
        citiesCount: uniqueCities.size,
        specialtiesCount: uniqueSpecialties.size
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    window.location.hash = 'login';
    return null;
  }

  const handleBackToSite = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <div className="container py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Button
              variant="secondary"
              className="flex items-center gap-2 mb-4"
              onClick={handleBackToSite}
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka till plattformen
            </Button>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Hantera partners och artiklar</p>
          </div>
        </div>

        {isAddingPartner ? (
          <div className="max-w-4xl mx-auto">
            <PartnerForm onCancel={() => setIsAddingPartner(false)} />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <GlassCard className="flex items-center gap-4">
                <div className="bg-[#646cea]/10 p-3 rounded-2xl">
                  <Building className="w-6 h-6 text-[#646cea]" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.partnersCount}</div>
                  <div className="text-muted-foreground">Partners</div>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="bg-[#646cea]/10 p-3 rounded-2xl">
                  <Users className="w-6 h-6 text-[#646cea]" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.lawyersCount}</div>
                  <div className="text-muted-foreground">Jurister</div>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="bg-[#646cea]/10 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-[#646cea]" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.citiesCount}</div>
                  <div className="text-muted-foreground">Städer</div>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="bg-[#646cea]/10 p-3 rounded-2xl">
                  <Globe className="w-6 h-6 text-[#646cea]" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.specialtiesCount}</div>
                  <div className="text-muted-foreground">Specialområden</div>
                </div>
              </GlassCard>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-4">
                <Button 
                  variant={currentView === 'partners' ? 'primary' : 'secondary'}
                  onClick={() => setCurrentView('partners')}
                  className="flex items-center gap-2"
                >
                  <Building className="w-5 h-5" />
                  Partners
                </Button>
                <Button 
                  variant={currentView === 'articles' ? 'primary' : 'secondary'}
                  onClick={() => setCurrentView('articles')}
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Artiklar
                </Button>
              </div>

              {currentView === 'partners' && (
                <Button 
                  variant="primary" 
                  onClick={() => setIsAddingPartner(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Lägg till partner
                </Button>
              )}
            </div>

            {currentView === 'partners' ? (
              <PartnerList />
            ) : (
              <ArticleList />
            )}
          </>
        )}
      </div>
    </div>
  );
}
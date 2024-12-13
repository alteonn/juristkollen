import { 
  Briefcase, Users, Scale, Gavel, Heart, Building2, 
  FileText, ShoppingBag, Shield, Calculator, ArrowRight 
} from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

export function ServiceTypes() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Briefcase,
      title: 'Arbetsrätt',
      description: 'Anställningsavtal, fackförbund, kollektivavtal, trakasseri, upphovsrätt, uppsägning och nedskärning m.m.',
      href: '/tjanster/arbetsratt'
    },
    {
      icon: Users,
      title: 'Asylrätt och migrationsrätt',
      description: 'Asylansökan, arbetstillstånd, medborgarskap, uppehållstillstånd, visum m.m.',
      href: '/tjanster/asylratt'
    },
    {
      icon: Scale,
      title: 'Avtal och kontrakt',
      description: 'Kontrakt mellan privatpersoner eller näringsidkare, konsumenttvister m.m.',
      href: '/tjanster/avtal'
    },
    {
      icon: Gavel,
      title: 'Brottmål och försvarsadvokat',
      description: 'Brottmål, ekobrott, målsägandebiträde, trafikbrott och körkort m.m.',
      href: '/tjanster/brottmal'
    },
    {
      icon: Heart,
      title: 'Familjerätt',
      description: 'Adoption, bodelning, dödsbo, skilsmässa, testamente, vårdnad och umgänge m.m.',
      href: '/tjanster/familjeratt'
    },
    {
      icon: Building2,
      title: 'Fastighetsrätt',
      description: 'Arrende, bygglov, entreprenad, hyra, köp och försäljning, miljörätt m.m.',
      href: '/tjanster/fastighetsratt'
    },
    {
      icon: FileText,
      title: 'Förvaltningsrätt och kommunalrätt',
      description: 'Felaktig handläggning, socialförsäkring, överklaga beslut m.m.',
      href: '/tjanster/forvaltningsratt'
    },
    {
      icon: ShoppingBag,
      title: 'Konsumenträtt',
      description: 'Avtal och kontrakt, reklamation, resa m.m.',
      href: '/tjanster/konsumentratt'
    },
    {
      icon: Shield,
      title: 'Skada, ersättning och försäkring',
      description: 'Ersättning, sjukdom, skada, utbetalning m.m.',
      href: '/tjanster/skadestand'
    },
    {
      icon: Calculator,
      title: 'Skatt och finans',
      description: 'Betalning, deklaration, moms, överklagande m.m.',
      href: '/tjanster/skatt-finans'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hitta bäst jurist för ditt ärende
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Välj bland våra specialiserade jurister inom olika rättsområden. 
            Tjänsten är kostnadsfri och utan förpliktelser.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard 
              key={index}
              className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(service.href)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold pt-2">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground flex-1">
                {service.description}
              </p>

              <Button 
                variant="secondary" 
                className="mt-6 group w-full"
              >
                Läs mer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Shield, Scale, Clock, Users, Award, HeartHandshake } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: 'Kvalitetssäkrade jurister',
      description: 'Alla jurister på vår plattform genomgår en noggrann kvalitetskontroll och verifiering.'
    },
    {
      icon: Scale,
      title: 'Specialistkompetens',
      description: 'Få tillgång till jurister med expertis inom just ditt specifika rättsområde.'
    },
    {
      icon: Clock,
      title: 'Snabb hantering',
      description: 'Få svar från kvalificerade jurister inom 24 timmar efter din förfrågan.'
    },
    {
      icon: Users,
      title: 'Brett nätverk',
      description: 'Vi samarbetar med hundratals jurister och advokatbyråer över hela Sverige.'
    },
    {
      icon: Award,
      title: 'Hög kvalitet',
      description: 'Vi värdesätter kvalitet och professionalism i alla våra samarbeten.'
    },
    {
      icon: HeartHandshake,
      title: 'Kostnadsfri matchning',
      description: 'Vår matchningstjänst är helt kostnadsfri för dig som söker juridisk hjälp.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Därför ska du välja oss</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi hjälper dig att hitta rätt juridisk expertis för dina behov
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="flex flex-col items-start">
              <div className="bg-primary/10 p-3 rounded-2xl mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
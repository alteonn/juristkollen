import { Target, Users, Shield, Award } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function AboutValues() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Vi matchar dig med jurister som har specifik expertis inom just ditt rättsområde.'
    },
    {
      icon: Users,
      title: 'Tillgänglighet',
      description: 'Vårt nätverk omfattar hundratals kvalificerade jurister över hela Sverige.'
    },
    {
      icon: Shield,
      title: 'Trygghet',
      description: 'Alla jurister i vårt nätverk är noggrant utvalda och kvalitetssäkrade.'
    },
    {
      icon: Award,
      title: 'Kvalitet',
      description: 'Vi ställer höga krav på kompetens, erfarenhet och professionalism.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <GlassCard key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Shield, Lock, FileCheck } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function AboutSecurity() {
  const features = [
    {
      icon: Shield,
      title: 'GDPR-anpassat system',
      description: 'All hantering av personuppgifter sker i enlighet med GDPR och svensk lag.'
    },
    {
      icon: Lock,
      title: 'Säker kommunikation',
      description: 'All information överförs krypterat och delas endast med utvalda jurister.'
    },
    {
      icon: FileCheck,
      title: 'Kvalitetssäkrade partners',
      description: 'Vi samarbetar endast med etablerade och kvalitetssäkrade juristbyråer.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Din trygghet är vår prioritet</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
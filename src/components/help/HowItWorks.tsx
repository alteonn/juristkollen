import { FileText, Users, MessageCircle, CheckSquare } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Beskriv ditt ärende',
      description: 'Fyll i vårt enkla formulär och berätta om ditt juridiska ärende.'
    },
    {
      icon: Users,
      title: 'Vi matchar dig',
      description: 'Vårt system matchar dig med jurister som är specialiserade inom ditt område.'
    },
    {
      icon: MessageCircle,
      title: 'Få kontakt',
      description: 'Utvalda jurister kontaktar dig inom 24 timmar för att diskutera ditt ärende.'
    },
    {
      icon: CheckSquare,
      title: 'Välj jurist',
      description: 'Jämför och välj den jurist som passar bäst för dina behov.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Så här fungerar det</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En enkel process för att hitta rätt juridisk expertis för dina behov
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <GlassCard key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
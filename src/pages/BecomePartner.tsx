import { Scale, Users, Target, TrendingUp, Megaphone, Briefcase, Mail } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

export function BecomePartner() {
  const benefits = [
    {
      icon: Target,
      title: 'Nå rätt klienter',
      description: 'Få tillgång till kvalificerade leads från klienter som aktivt söker juridisk expertis inom era specialområden.'
    },
    {
      icon: Users,
      title: 'Ökad synlighet',
      description: 'Presentera er byrå och era jurister på Sveriges ledande plattform för juridiska tjänster.'
    },
    {
      icon: TrendingUp,
      title: 'Tillväxt och utveckling',
      description: 'Expandera er verksamhet genom att nå ut till nya målgrupper och marknadssegment.'
    },
    {
      icon: Megaphone,
      title: 'Stärkt varumärke',
      description: 'Bygg ert varumärke genom en professionell närvaro på en etablerad och trovärdig plattform.'
    },
    {
      icon: Briefcase,
      title: 'Effektiv matchning',
      description: 'Vår avancerade matchningsalgoritm kopplar samman er med de klienter som bäst matchar er expertis.'
    },
    {
      icon: Scale,
      title: 'Kvalitetssäkring',
      description: 'Som partner genomgår ni vår kvalitetssäkringsprocess vilket inger förtroende hos potentiella klienter.'
    }
  ];

  const features = [
    'Dedikerad profilsida för er byrå',
    'Presentation av era jurister och specialister',
    'Exponering mot kvalificerade leads',
    'Möjlighet att visa referenser och omdömen',
    'Statistik och insikter om era besökare',
    'Prioriterad placering i sökresultat',
    'Support och rådgivning',
    'Regelbundna partnerträffar'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Bli partner på <span className="gradient-text">Juristkollen.se</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Anslut er till Sveriges ledande plattform för juridiska tjänster och nå ut till fler kvalificerade klienter.
              </p>
              <a 
                href="mailto:info@juristkollen.se"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#646cea] text-white rounded-full font-medium 
                         hover:shadow-xl hover:shadow-[#646cea]/20 transition-all duration-300 
                         hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Maila oss på info@juristkollen.se
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Fördelar som partner</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Som partner på Juristkollen.se får ni tillgång till en rad fördelar som hjälper er att växa och utveckla er verksamhet.
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

        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GlassCard className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Det här ingår i partnerskapet</h2>
                  <p className="text-muted-foreground mb-8">
                    Som partner får ni tillgång till en omfattande uppsättning verktyg och funktioner som hjälper er att maximera er närvaro på plattformen.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                  <img
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80"
                    alt="Partner benefits"
                    className="relative rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Redo att ta nästa steg?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Kontakta oss idag för att diskutera hur vi kan hjälpa er att nå ut till fler klienter och växa er verksamhet.
              </p>
              <a 
                href="mailto:info@juristkollen.se"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#646cea] text-white rounded-full font-medium 
                         hover:shadow-xl hover:shadow-[#646cea]/20 transition-all duration-300 
                         hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Maila oss på info@juristkollen.se
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
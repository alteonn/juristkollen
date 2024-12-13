import { Heart, Scale, FileText, Users, Shield, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function FamilyLaw() {
  const services = [
    {
      icon: Heart,
      title: 'Skilsmässa',
      description: 'Professionell hjälp genom hela skilsmässoprocessen, inklusive bodelning, vårdnad och underhåll.'
    },
    {
      icon: Users,
      title: 'Vårdnadstvister',
      description: 'Erfaren representation i vårdnads-, boende- och umgängesfrågor med barnets bästa i fokus.'
    },
    {
      icon: Scale,
      title: 'Bodelning',
      description: 'Juridisk hjälp vid fördelning av tillgångar och skulder vid separation eller dödsfall.'
    },
    {
      icon: FileText,
      title: 'Testamente',
      description: 'Upprättande och granskning av testamenten för att säkerställa att din sista vilja respekteras.'
    },
    {
      icon: Shield,
      title: 'Äktenskapsförord',
      description: 'Rådgivning och upprättande av äktenskapsförord för att skydda enskild egendom.'
    },
    {
      icon: HandshakeIcon,
      title: 'Samboavtal',
      description: 'Hjälp med att upprätta juridiskt hållbara samboavtal som skyddar båda parters intressen.'
    }
  ];

  const situations = [
    {
      title: 'Skilsmässa och separation',
      description: 'När ett förhållande tar slut är det viktigt att få professionell hjälp för att hantera praktiska och juridiska frågor på ett bra sätt.',
      points: [
        'Bodelning och egendomsfördelning',
        'Vårdnad om barn',
        'Underhållsbidrag',
        'Gemensam egendom'
      ]
    },
    {
      title: 'Familjebildning',
      description: 'Vid nya familjekonstellationer kan det vara klokt att reglera ekonomiska och juridiska förhållanden i förväg.',
      points: [
        'Äktenskapsförord',
        'Samboavtal',
        'Adoptionsfrågor',
        'Gåvobrev'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">familjerätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                När livet förändras behöver du en erfaren familjerättsjurist vid din sida. Vi hjälper dig att hitta hållbara lösningar för din familjs framtid.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp för din familj
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Familjerätten berör några av livets viktigaste beslut och förändringar. Våra erfarna jurister ger dig det stöd och den expertis du behöver för att hantera juridiska frågor som rör din familj.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi strävar efter att hitta konstruktiva lösningar som fungerar långsiktigt för alla inblandade, särskilt när barn är berörda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <GlassCard key={index} className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-2xl mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                När behöver du en familjerättsjurist?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {situations.map((situation, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{situation.title}</h3>
                    <p className="text-muted-foreground mb-6">{situation.description}</p>
                    <ul className="space-y-2">
                      {situation.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-12">
                <GlassCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Varför välja våra familjerättsjurister?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Familjerättsliga frågor är ofta känslomässigt utmanande och kräver både juridisk expertis och medmänsklig förståelse. Våra erfarna jurister ger dig professionellt stöd genom hela processen.
                    </p>
                    <p>
                      Vi arbetar för att hitta konstruktiva lösningar som fungerar långsiktigt för alla parter, med särskilt fokus på barnens bästa när de är berörda. Med vår hjälp kan du känna dig trygg i att dina och din familjs intressen tillvaratas på bästa sätt.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
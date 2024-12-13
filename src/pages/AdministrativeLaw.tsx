import { Scale, FileText, Building2, Shield, Users, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function AdministrativeLaw() {
  const services = [
    {
      icon: Scale,
      title: 'Överklaganden',
      description: 'Experthjälp med att överklaga myndighetsbeslut till förvaltningsdomstol och säkerställa att dina rättigheter tillvaratas.'
    },
    {
      icon: Building2,
      title: 'Kommunala ärenden',
      description: 'Juridiskt stöd i ärenden som rör kommunala beslut, bygglov, tillstånd och andra kommunalrättsliga frågor.'
    },
    {
      icon: Shield,
      title: 'Socialförsäkring',
      description: 'Hjälp med ärenden som rör Försäkringskassan, sjukpenning, aktivitetsersättning och andra socialförsäkringsfrågor.'
    },
    {
      icon: Users,
      title: 'LSS och bistånd',
      description: 'Rådgivning och juridiskt stöd i ärenden som rör LSS, socialtjänstlagen och rätten till bistånd.'
    },
    {
      icon: FileText,
      title: 'Handläggningsfrågor',
      description: 'Granskning av myndigheters handläggning och hjälp vid felaktig myndighetsutövning.'
    },
    {
      icon: HandshakeIcon,
      title: 'Tillstånd och licenser',
      description: 'Stöd vid ansökningar om olika typer av tillstånd och vid överklagande av avslagsbeslut.'
    }
  ];

  const commonCases = [
    {
      title: 'Myndighetsbeslut',
      description: 'Professionell hjälp med att överklaga och granska myndighetsbeslut.',
      points: [
        'Överklaganden till förvaltningsrätt',
        'Granskning av beslutsmotivering',
        'Komplettering av underlag',
        'Processuell vägledning'
      ]
    },
    {
      title: 'Kommunala ärenden',
      description: 'Omfattande stöd i ärenden som rör kommunala beslut och rättigheter.',
      points: [
        'Bygglovsärenden',
        'Skolärenden',
        'Biståndsfrågor',
        'Tillståndsfrågor'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">förvaltningsrätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för ärenden som rör myndigheter och offentlig förvaltning. Vi hjälper dig att tillvarata dina rättigheter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp inom förvaltningsrätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Förvaltningsrätten reglerar förhållandet mellan enskilda och myndigheter. Våra specialiserade jurister har gedigen erfarenhet av att hjälpa privatpersoner och företag i kontakten med myndigheter.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi erbjuder expertis inom alla typer av förvaltningsrättsliga ärenden och hjälper dig att navigera genom den ofta komplexa myndighetsprocessen.
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
                Vanliga förvaltningsrättsliga ärenden
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {commonCases.map((case_, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{case_.title}</h3>
                    <p className="text-muted-foreground mb-6">{case_.description}</p>
                    <ul className="space-y-2">
                      {case_.points.map((point, i) => (
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
                    Varför anlita en förvaltningsrättsjurist?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Förvaltningsrättsliga ärenden kan vara komplexa och svårnavigerade för den som inte är insatt i systemet. En erfaren jurist kan hjälpa dig att förstå dina rättigheter och möjligheter, samt säkerställa att din sak får en korrekt prövning.
                    </p>
                    <p>
                      Med vår hjälp kan du känna dig trygg i att dina intressen tillvaratas på bästa sätt i kontakten med myndigheter och förvaltningsdomstolar. Vi har den kunskap och erfarenhet som krävs för att driva ditt ärende framgångsrikt.
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
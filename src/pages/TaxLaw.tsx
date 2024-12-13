import { Calculator, Scale, FileText, Building2, Shield, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function TaxLaw() {
  const services = [
    {
      icon: Calculator,
      title: 'Skatteplanering',
      description: 'Strategisk rådgivning för att optimera din skattesituation på ett lagligt och effektivt sätt.'
    },
    {
      icon: Scale,
      title: 'Skatteprocesser',
      description: 'Experthjälp vid skattetvister och överklaganden till förvaltningsdomstol.'
    },
    {
      icon: Building2,
      title: 'Företagsbeskattning',
      description: 'Rådgivning om bolagsskatt, moms, arbetsgivaravgifter och internationell beskattning.'
    },
    {
      icon: FileText,
      title: 'Deklarationer',
      description: 'Professionell hjälp med komplexa deklarationer och skatteärenden.'
    },
    {
      icon: Shield,
      title: 'Skatterevidering',
      description: 'Stöd vid skatterevisioner och granskning från Skatteverket.'
    },
    {
      icon: HandshakeIcon,
      title: 'Generationsskiften',
      description: 'Rådgivning vid ägarskiften och skatteeffektiv överlåtelse av företag.'
    }
  ];

  const commonCases = [
    {
      title: 'Företagsbeskattning',
      description: 'Omfattande hjälp med företagets skattefrågor och ekonomiska planering.',
      points: [
        'Bolagsskatt och moms',
        'Internationell beskattning',
        'Koncernbeskattning',
        'Skatteoptimering'
      ]
    },
    {
      title: 'Privat beskattning',
      description: 'Experthjälp för privatpersoner i komplexa skattefrågor.',
      points: [
        'Kapitalvinstbeskattning',
        'Fastighetsförsäljning',
        'Generationsskiften',
        'Internationella skattefrågor'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">skatt och finans</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för att optimera din skattesituation och hantera komplexa finansiella frågor. Vi hjälper både företag och privatpersoner.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp inom skatterätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Skatterätt är ett komplext område som kräver både djup juridisk kunskap och förståelse för ekonomiska sammanhang. Våra erfarna skattejurister hjälper dig att navigera genom skattelagstiftningen och optimera din situation.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi erbjuder strategisk rådgivning och praktiskt stöd i alla typer av skattefrågor, från löpande skatteplanering till hantering av tvister med Skatteverket.
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
                Vanliga skatteärenden
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
                    Varför anlita en skattejurist?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Skattelagstiftningen är komplex och under ständig förändring. En erfaren skattejurist kan hjälpa dig att minimera skatterisker och optimera din situation inom lagens ramar.
                    </p>
                    <p>
                      Med vår hjälp kan du känna dig trygg i att dina skatte- och finansfrågor hanteras korrekt och effektivt. Vi har den expertis som krävs för att ge dig bästa möjliga förutsättningar i kontakten med Skatteverket och andra myndigheter.
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
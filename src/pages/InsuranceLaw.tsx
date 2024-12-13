import { Shield, Scale, FileText, Heart, HandshakeIcon, AlertCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function InsuranceLaw() {
  const services = [
    {
      icon: Shield,
      title: 'Försäkringsärenden',
      description: 'Experthjälp vid avslag på försäkringsersättning och tvister med försäkringsbolag.'
    },
    {
      icon: Scale,
      title: 'Skadestånd',
      description: 'Professionellt stöd för att beräkna och kräva skadestånd vid person- eller sakskada.'
    },
    {
      icon: Heart,
      title: 'Personskador',
      description: 'Omfattande hjälp vid personskador, trafikskador och arbetsskador.'
    },
    {
      icon: FileText,
      title: 'Ersättningskrav',
      description: 'Hjälp att driva igenom berättigade ersättningskrav mot försäkringsbolag eller skadevållare.'
    },
    {
      icon: HandshakeIcon,
      title: 'Förhandling',
      description: 'Erfaren representation vid förhandlingar med försäkringsbolag och motparter.'
    },
    {
      icon: AlertCircle,
      title: 'Riskbedömning',
      description: 'Analys av försäkringsvillkor och bedömning av möjligheter till ersättning.'
    }
  ];

  const commonCases = [
    {
      title: 'Försäkringsärenden',
      description: 'Professionell hjälp när försäkringsbolaget nekar ersättning eller erbjuder för låg ersättning.',
      points: [
        'Avslag på försäkringsersättning',
        'Tolkning av försäkringsvillkor',
        'Överklagande av beslut',
        'Omprövning av ersättningsnivåer'
      ]
    },
    {
      title: 'Skadestånd och ersättning',
      description: 'Omfattande stöd för att säkerställa rätt ersättning vid olika typer av skador.',
      points: [
        'Personskadeersättning',
        'Sakskador',
        'Inkomstförlust',
        'Ideell ersättning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">försäkring och skadestånd</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för att säkerställa den ersättning du har rätt till. Vi hjälper dig att driva ditt ärende mot försäkringsbolag och andra motparter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp vid försäkrings- och skadeståndsärenden
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                När olyckan är framme är det viktigt att få rätt ersättning. Våra erfarna jurister hjälper dig att förstå dina rättigheter och säkerställer att du får den ersättning du har rätt till.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi har gedigen erfarenhet av att företräda klienter i försäkrings- och skadeståndsärenden och arbetar målmedvetet för att tillvarata dina intressen.
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
                Vanliga försäkrings- och skadeståndsärenden
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
                    Varför anlita en försäkrings- och skadeståndsjurist?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Försäkrings- och skadeståndsrätt är komplexa områden där det kan vara svårt att på egen hand hävda sina rättigheter. En erfaren jurist kan hjälpa dig att förstå dina möjligheter och driva ditt ärende på ett professionellt sätt.
                    </p>
                    <p>
                      Med vår hjälp kan du känna dig trygg i att din sak hanteras korrekt och att dina intressen tillvaratas på bästa sätt. Vi har den kunskap och erfarenhet som krävs för att hjälpa dig genom hela processen, från initial bedömning till eventuell domstolsprocess.
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
import { ShoppingBag, Scale, Shield, FileText, HandshakeIcon, ArrowLeftRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function ConsumerLaw() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Konsumentköp',
      description: 'Experthjälp vid tvister om produkter och tjänster, reklamationer och garantiärenden.'
    },
    {
      icon: Scale,
      title: 'Avtalsgranskningar',
      description: 'Professionell granskning av konsumentavtal och köpevillkor för att säkerställa dina rättigheter.'
    },
    {
      icon: Shield,
      title: 'Reklamationer',
      description: 'Stöd vid reklamationer och hjälp att driva igenom dina rättigheter som konsument.'
    },
    {
      icon: FileText,
      title: 'Konsumentvägledning',
      description: 'Rådgivning om dina rättigheter och skyldigheter enligt konsumentlagstiftningen.'
    },
    {
      icon: HandshakeIcon,
      title: 'Förlikningar',
      description: 'Hjälp med förhandlingar och förlikningar i konsumenttvister.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Ångerrätt',
      description: 'Rådgivning om ångerrätt vid distansköp och hjälp att hävda denna rätt.'
    }
  ];

  const commonCases = [
    {
      title: 'Produkter och tjänster',
      description: 'Juridisk hjälp vid problem med köpta varor eller tjänster.',
      points: [
        'Felaktiga produkter',
        'Försenade leveranser',
        'Bristfälliga tjänster',
        'Garantiärenden'
      ]
    },
    {
      title: 'Avtal och villkor',
      description: 'Stöd i frågor som rör konsumentavtal och köpevillkor.',
      points: [
        'Oskäliga avtalsvillkor',
        'Dolda avgifter',
        'Ångerrätt',
        'Avtalsbrott'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">konsumenträtt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för att skydda dina rättigheter som konsument. Vi hjälper dig att lösa tvister och få den ersättning du har rätt till.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp för konsumenter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Som konsument har du starka rättigheter enligt svensk lag. Våra erfarna jurister hjälper dig att förstå och hävda dessa rättigheter när du hamnat i tvist med företag eller näringsidkare.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi erbjuder expertis inom alla typer av konsumenträttsliga ärenden och hjälper dig att nå en rättvis lösning på din tvist.
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
                Vanliga konsumenträttsliga ärenden
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
                    Varför anlita en konsumenträttsjurist?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Konsumenträtten kan vara komplex och det kan vara svårt att på egen hand driva igenom sina rättigheter mot större företag. En erfaren jurist kan hjälpa dig att förstå dina rättigheter och möjligheter, samt ge dig det stöd du behöver för att nå en rättvis lösning.
                    </p>
                    <p>
                      Med vår hjälp kan du känna dig trygg i att dina intressen tillvaratas på bästa sätt. Vi har den kunskap och erfarenhet som krävs för att hjälpa dig genom hela processen, från initial rådgivning till eventuell domstolsprocess.
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
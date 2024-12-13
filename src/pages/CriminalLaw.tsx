import { Scale, Shield, Users, FileText, Gavel, Heart } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function CriminalLaw() {
  const services = [
    {
      icon: Shield,
      title: 'Försvarsadvokat',
      description: 'Erfaren representation i brottmål med fokus på att tillvarata dina rättigheter och intressen genom hela processen.'
    },
    {
      icon: Heart,
      title: 'Målsägandebiträde',
      description: 'Professionellt stöd för brottsoffer, hjälp med skadeståndsanspråk och representation under rättegång.'
    },
    {
      icon: Gavel,
      title: 'Rättegångsprocessen',
      description: 'Omfattande stöd genom hela rättsprocessen, från förundersökning till huvudförhandling och eventuellt överklagande.'
    },
    {
      icon: FileText,
      title: 'Juridisk rådgivning',
      description: 'Tydlig och professionell rådgivning om dina rättigheter, skyldigheter och möjligheter i brottmålsprocessen.'
    },
    {
      icon: Scale,
      title: 'Skadestånd',
      description: 'Hjälp med att beräkna och yrka skadestånd samt att driva in ersättning från gärningspersonen eller försäkringsbolag.'
    },
    {
      icon: Users,
      title: 'Stödperson',
      description: 'Tillgång till erfaret stöd genom hela processen, inklusive förberedelser inför och under rättegången.'
    }
  ];

  const keyPoints = [
    {
      title: 'Som tilltalad',
      description: 'När du är misstänkt för brott har du rätt till en offentlig försvarare. Vi hjälper dig att förstå dina rättigheter och säkerställer att du får ett professionellt försvar.',
      points: [
        'Rätt till offentlig försvarare',
        'Stöd under förhör',
        'Representation i domstol',
        'Hjälp med överklagande'
      ]
    },
    {
      title: 'Som målsägande',
      description: 'Som brottsoffer har du rätt till målsägandebiträde som kan stötta dig genom processen och hjälpa dig att få den ersättning du har rätt till.',
      points: [
        'Kostnadsfritt målsägandebiträde',
        'Hjälp med skadeståndskrav',
        'Stöd under rättegång',
        'Hjälp med ersättning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">brottmål</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionellt juridiskt stöd genom hela rättsprocessen. Vi hjälper både tilltalade och målsägande att tillvarata sina rättigheter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp i brottmål
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                En brottmålsprocess kan vara både juridiskt komplex och mentalt påfrestande. Våra erfarna jurister ger dig det stöd och den expertis du behöver för att hantera processen på bästa sätt.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi erbjuder professionell representation och stöd genom hela rättsprocessen, oavsett om du är tilltalad eller målsägande.
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
                Juridiskt stöd anpassat efter din situation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {keyPoints.map((point, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                    <p className="text-muted-foreground mb-6">{point.description}</p>
                    <ul className="space-y-2">
                      {point.points.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-12">
                <GlassCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Varför välja våra brottmålsjurister?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      En brottmålsprocess är ofta en komplex och känslomässigt krävande upplevelse. Våra erfarna jurister ger dig inte bara juridisk expertis utan också det personliga stöd du behöver genom hela processen.
                    </p>
                    <p>
                      Vi hjälper dig att förstå dina rättigheter och möjligheter, förbereder dig inför rättegången och arbetar målmedvetet för att tillvarata dina intressen. Med vår hjälp kan du känna dig trygg i att din sak hanteras professionellt och engagerat.
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
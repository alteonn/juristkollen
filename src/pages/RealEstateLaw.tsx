import { Building2, Scale, FileText, Users, Shield, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function RealEstateLaw() {
  const services = [
    {
      icon: Building2,
      title: 'Fastighetsköp',
      description: 'Juridisk rådgivning vid köp och försäljning av fastigheter, inklusive due diligence och avtalsförhandling.'
    },
    {
      icon: HandshakeIcon,
      title: 'Hyres- och arrenderätt',
      description: 'Experthjälp med hyresavtal, besittningsskydd, uppsägningar och tvister mellan hyresvärdar och hyresgäster.'
    },
    {
      icon: Shield,
      title: 'Dolda fel',
      description: 'Stöd vid tvister om dolda fel, reklamationer och ersättningskrav i samband med fastighetsköp.'
    },
    {
      icon: FileText,
      title: 'Bygglov och tillstånd',
      description: 'Hjälp med bygglovsansökningar, överklaganden och andra myndighetskontakter.'
    },
    {
      icon: Users,
      title: 'Bostadsrättsföreningar',
      description: 'Juridisk rådgivning för bostadsrättsföreningar i frågor om stadgar, medlemskap och tvister.'
    },
    {
      icon: Scale,
      title: 'Granntvister',
      description: 'Medling och juridiskt stöd vid konflikter mellan grannar och fastighetsägare.'
    }
  ];

  const commonIssues = [
    {
      title: 'Fastighetsköp och försäljning',
      description: 'Juridisk granskning av köpekontrakt, undersökning av fastigheten och hantering av eventuella tvister.',
      points: [
        'Köpekontrakt och överlåtelseavtal',
        'Due diligence',
        'Dolda fel och reklamationer',
        'Fastighetstvister'
      ]
    },
    {
      title: 'Hyres- och bostadsrättsfrågor',
      description: 'Omfattande hjälp med alla typer av boenderelaterade juridiska frågor.',
      points: [
        'Hyresavtal och besittningsskydd',
        'Bostadsrättsföreningar',
        'Andrahandsuthyrning',
        'Uppsägningar och avhysning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">fastighetsrätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för alla typer av fastighetsfrågor. Vi hjälper både privatpersoner och företag att hantera fastighetsrättsliga ärenden.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp inom fastighetsrätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fastighetsrätt är ett komplext område som kräver både juridisk expertis och praktisk erfarenhet. Våra specialiserade jurister har gedigen kunskap inom alla aspekter av fastighetsrätt.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi hjälper dig att navigera genom komplexa fastighetsärenden och säkerställer att dina intressen tillvaratas på bästa sätt.
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
                Vanliga fastighetsrättsliga ärenden
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {commonIssues.map((issue, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{issue.title}</h3>
                    <p className="text-muted-foreground mb-6">{issue.description}</p>
                    <ul className="space-y-2">
                      {issue.points.map((point, i) => (
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
                    Varför välja våra fastighetsrättsjurister?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Fastighetsärenden kan vara både komplexa och ekonomiskt betydelsefulla. Våra erfarna jurister ger dig den expertis och trygghet du behöver för att fatta välgrundade beslut.
                    </p>
                    <p>
                      Vi hjälper både privatpersoner och företag med allt från vardagliga fastighetsärenden till komplexa tvister. Med vår hjälp kan du känna dig trygg i att dina intressen tillvaratas på bästa sätt.
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
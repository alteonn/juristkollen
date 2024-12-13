import { FileText, Scale, Users, Shield, Briefcase, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function ContractLaw() {
  const services = [
    {
      icon: FileText,
      title: 'Avtalsgranskning',
      description: 'Professionell granskning av avtal för att säkerställa att dina intressen skyddas och att avtalet är juridiskt hållbart.'
    },
    {
      icon: HandshakeIcon,
      title: 'Avtalsförhandling',
      description: 'Experthjälp vid förhandling av avtal med motparter, inklusive villkor, ersättning och ansvarsfrågor.'
    },
    {
      icon: Shield,
      title: 'Tvistelösning',
      description: 'Juridiskt stöd vid avtalstvister, inklusive medling, förhandling och domstolsprocesser.'
    },
    {
      icon: Users,
      title: 'Kompanjonavtal',
      description: 'Upprättande och granskning av kompanjonavtal för att säkerställa en trygg grund för affärssamarbeten.'
    },
    {
      icon: Scale,
      title: 'Notarius Publicus',
      description: 'Hjälp med att få avtal och dokument bevittnade av Notarius Publicus för ökad juridisk säkerhet.'
    },
    {
      icon: Briefcase,
      title: 'Affärsjuridik',
      description: 'Omfattande juridisk rådgivning inom affärsjuridik och kommersiella avtal.'
    }
  ];

  const commonCases = [
    {
      title: 'Företagsavtal',
      description: 'Upprättande och granskning av olika typer av företagsavtal, inklusive leverantörsavtal, kundavtal och samarbetsavtal.'
    },
    {
      title: 'Konsumentavtal',
      description: 'Juridisk hjälp vid tvister mellan konsumenter och företag, samt granskning av konsumentavtal.'
    },
    {
      title: 'Fastighetsavtal',
      description: 'Expertis inom köpeavtal, hyresavtal och andra fastighetsrelaterade överenskommelser.'
    },
    {
      title: 'Familjerättsliga avtal',
      description: 'Hjälp med äktenskapsförord, samboavtal och andra familjerättsliga överenskommelser.'
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
                Experthjälp inom <span className="gradient-text">avtalsrätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning för att säkerställa trygga och hållbara avtal. Vi hjälper dig att förebygga framtida konflikter och skydda dina intressen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp inom avtalsrätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Avtal är grunden för trygga affärsrelationer och samarbeten. Med rätt juridisk expertis kan du förebygga framtida konflikter och säkerställa att dina intressen skyddas på bästa sätt.
              </p>
              <p className="text-lg text-muted-foreground">
                Våra erfarna jurister har gedigen kompetens inom avtalsrätt och kan hjälpa dig med allt från granskning och upprättande av avtal till förhandling och tvistelösning.
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
                Vanliga avtalsärenden
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {commonCases.map((item, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-12">
                <GlassCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Varför anlita en avtalsrättsjurist?
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Inom affärsjuridiken är avtal och kontrakt centrala. Våra jurister hjälper dig att upprätta avtal, lösa tvister och vid behov driva ärenden i domstol. Vi erbjuder expertis för både företag och privatpersoner.
                    </p>
                    <p>
                      Ett välskrivet avtal kan förebygga framtida konflikter och säkerställa att alla parter förstår sina rättigheter och skyldigheter. Våra jurister har den erfarenhet som krävs för att skapa tydliga och juridiskt hållbara avtal.
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
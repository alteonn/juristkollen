import { Globe, FileCheck, Users, MessageSquare, Scale, Heart } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';

export function AsylumLaw() {
  const services = [
    {
      icon: FileCheck,
      title: 'Asylansökan',
      description: 'Professionell hjälp genom hela asylprocessen, från ansökan till beslut. Vi säkerställer att din ansökan är korrekt och komplett.'
    },
    {
      icon: Globe,
      title: 'Uppehållstillstånd',
      description: 'Experthjälp med ansökan om tillfälligt eller permanent uppehållstillstånd, samt förlängning av befintliga tillstånd.'
    },
    {
      icon: Users,
      title: 'Familjeåterförening',
      description: 'Juridiskt stöd för att återförenas med din familj i Sverige, inklusive make/maka, barn och andra nära anhöriga.'
    },
    {
      icon: Scale,
      title: 'Överklaganden',
      description: 'Erfaren representation vid överklagande av beslut från Migrationsverket eller migrationsdomstolarna.'
    },
    {
      icon: MessageSquare,
      title: 'Tolktjänster',
      description: 'Tillgång till kvalificerade tolkar som säkerställer effektiv kommunikation på ditt modersmål.'
    },
    {
      icon: Heart,
      title: 'Humanitära skäl',
      description: 'Specialiserad hjälp för ansökningar baserade på särskilt ömmande omständigheter eller humanitära skäl.'
    }
  ];

  const keyPoints = [
    {
      title: 'Professionell juridisk vägledning',
      description: 'Våra erfarna jurister guidar dig genom hela processen och säkerställer att dina rättigheter tillvaratas.'
    },
    {
      title: 'Flerspråkig assistans',
      description: 'Vi erbjuder hjälp på flera språk och samarbetar med kvalificerade tolkar för att överbrygga språkbarriärer.'
    },
    {
      title: 'Omfattande erfarenhet',
      description: 'Våra jurister har gedigen erfarenhet av migrationsärenden och håller sig uppdaterade om aktuell lagstiftning.'
    },
    {
      title: 'Personligt engagemang',
      description: 'Vi förstår den känslomässiga aspekten av migrationsärenden och ger dig det stöd du behöver.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">asyl- och migrationsrätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Vi hjälper dig att navigera genom Sveriges migrations- och asylprocess med professionell juridisk rådgivning och personligt engagemang.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Omfattande juridisk hjälp inom migrationsrätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Migrationsrätt är ett komplext område som kräver både juridisk expertis och kulturell förståelse. Våra specialiserade jurister har den kunskap och erfarenhet som krävs för att ge dig bästa möjliga stöd i din situation.
              </p>
              <p className="text-lg text-muted-foreground">
                Vi erbjuder hjälp på flera språk och samarbetar med kvalificerade tolkar för att säkerställa att du får den information och det stöd du behöver på ett språk du behärskar.
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
                Varför välja våra migrationsjurister?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {keyPoints.map((point, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Vi förstår att migrations- och asylprocesser kan vara både komplexa och emotionellt krävande. Våra jurister finns här för att stödja dig genom hela processen och säkerställa att dina rättigheter tillvaratas på bästa sätt.
                </p>
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
import { Scale, FileCheck, Shield, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';
import { SEO } from '../components/SEO';

export function NotariusPublicus() {
  const services = [
    {
      icon: FileCheck,
      title: 'Bevittning av dokument',
      description: 'Officiell bevittning av viktiga dokument och handlingar för att säkerställa deras äkthet och giltighet.'
    },
    {
      icon: HandshakeIcon,
      title: 'Verifiering av underskrifter',
      description: 'Bekräftelse och verifiering av underskrifter på juridiska dokument och avtal.'
    },
    {
      icon: Shield,
      title: 'Juridiska intyg',
      description: 'Utfärdande av olika typer av juridiska intyg och bekräftelser för officiellt bruk.'
    },
    {
      icon: Scale,
      title: 'Internationella ärenden',
      description: 'Hantering av dokument som ska användas utomlands, inklusive apostille och legalisering.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title="Notarius Publicus | Officiell dokumenthantering"
        description="Få hjälp med officiell bevittning av dokument, verifiering av underskrifter och andra juridiska formaliteter genom Notarius Publicus."
      />
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="gradient-text">Notarius Publicus</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                En Notarius Publicus är en statligt förordnad person som utför officiella bestyrkanden och verifieringar av dokument och underskrifter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Tjänster och uppgifter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                En Notarius Publicus har flera viktiga uppgifter och kan hjälpa dig med olika typer av officiella ärenden och dokumenthantering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">När behöver du en Notarius Publicus?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    En Notarius Publicus kan behövas i många olika situationer, särskilt när det gäller:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dokument som ska användas utomlands</li>
                    <li>Viktiga affärsavtal och kontrakt</li>
                    <li>Fullmakter och andra juridiska handlingar</li>
                    <li>Äkthetsintyg och bestyrkande av kopior</li>
                    <li>Växelprotester och sjöprotester</li>
                  </ul>
                  <p className="mt-6">
                    Genom vår tjänst kan vi hjälpa dig att komma i kontakt med en Notarius Publicus som kan assistera dig med dina behov av officiella bestyrkanden och verifieringar.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
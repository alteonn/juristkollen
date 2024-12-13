import { Scale, Shield, Users, FileText, Briefcase, HandshakeIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';
import { useNavigate } from 'react-router-dom';

export function EmploymentLaw() {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: 'Uppsägning och avsked',
      description: 'Juridisk rådgivning vid uppsägning, avsked eller arbetsbrist. Vi hjälper dig att förstå dina rättigheter och möjligheter.'
    },
    {
      icon: HandshakeIcon,
      title: 'Anställningsavtal',
      description: 'Granskning och förhandling av anställningsavtal, konkurrensklausuler och sekretessavtal.'
    },
    {
      icon: Shield,
      title: 'Diskriminering och trakasserier',
      description: 'Stöd och juridisk hjälp vid diskriminering, trakasserier eller kränkande särbehandling på arbetsplatsen.'
    },
    {
      icon: Users,
      title: 'Arbetsmiljöfrågor',
      description: 'Rådgivning kring arbetsmiljöfrågor, stress och psykosocial arbetsmiljö.'
    },
    {
      icon: Scale,
      title: 'Tvister och förhandlingar',
      description: 'Representation vid arbetsrättsliga tvister och förhandlingar med arbetsgivare.'
    },
    {
      icon: Briefcase,
      title: 'Omorganisation',
      description: 'Juridiskt stöd vid omorganisationer, omplaceringar och förändrade anställningsvillkor.'
    }
  ];

  const situations = [
    {
      title: 'Uppsägning eller avsked',
      description: 'När du står inför en uppsägning eller redan har blivit uppsagd behöver du snabbt förstå dina rättigheter och möjligheter.'
    },
    {
      title: 'Diskriminering och trakasserier',
      description: 'Om du upplever diskriminering eller trakasserier på arbetsplatsen är det viktigt att agera snabbt och korrekt.'
    },
    {
      title: 'Anställningsavtal',
      description: 'Vid nya anställningar eller förändringar i anställningsvillkor är det viktigt att få avtalet granskat av en expert.'
    },
    {
      title: 'Arbetsmiljöproblem',
      description: 'När arbetsmiljön påverkar din hälsa negativt har du rätt till stöd och åtgärder från arbetsgivaren.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Experthjälp inom <span className="gradient-text">arbetsrätt</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Få professionell juridisk rådgivning från erfarna arbetsrättsjurister. Vi hjälper dig att förstå dina rättigheter och skyldigheter i arbetslivet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Specialiserad juridisk hjälp inom arbetsrätt
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Arbetsrätten är ett komplext område som kräver djup kunskap och erfarenhet. Våra specialiserade jurister har gedigen erfarenhet av att hantera olika typer av arbetsrättsliga ärenden och kan ge dig det stöd du behöver.
              </p>
              <p className="text-lg text-muted-foreground">
                Oavsett om du är medlem i ett fackförbund eller inte kan våra jurister ge dig en oberoende bedömning av din situation och hjälpa dig att hitta den bästa lösningen.
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                När behöver du en arbetsrättsjurist?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {situations.map((situation, index) => (
                  <GlassCard key={index} className="text-left">
                    <h3 className="text-xl font-semibold mb-4">{situation.title}</h3>
                    <p className="text-muted-foreground">{situation.description}</p>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-12 max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  Traditionellt har fackförbunden varit den primära källan till arbetsrättslig hjälp i Sverige. Men allt fler väljer idag att anlita en egen jurist, antingen som komplement till facket eller som huvudsakligt juridiskt stöd.
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
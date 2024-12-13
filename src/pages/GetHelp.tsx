import { Shield, Scale, Clock, CheckCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/ui/GlassCard';
import { WhyChooseUs } from '../components/help/WhyChooseUs';
import { HowItWorks } from '../components/help/HowItWorks';

export function GetHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Få juridisk hjälp från <span className="gradient-text">experter</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Vi matchar dig med rätt jurist för ditt ärende – snabbt, enkelt och kostnadsfritt.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <GlassCard className="flex flex-col items-center text-center p-6">
                  <div className="bg-primary/10 p-3 rounded-2xl mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Kvalitetssäkrat</h3>
                  <p className="text-sm text-muted-foreground">
                    Alla jurister är noggrant utvalda och kvalitetssäkrade
                  </p>
                </GlassCard>

                <GlassCard className="flex flex-col items-center text-center p-6">
                  <div className="bg-primary/10 p-3 rounded-2xl mb-4">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Kostnadsfritt</h3>
                  <p className="text-sm text-muted-foreground">
                    Gratis att använda vår matchningstjänst
                  </p>
                </GlassCard>

                <GlassCard className="flex flex-col items-center text-center p-6">
                  <div className="bg-primary/10 p-3 rounded-2xl mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Snabbt svar</h3>
                  <p className="text-sm text-muted-foreground">
                    Svar från jurister inom 24 timmar
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <WhyChooseUs />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
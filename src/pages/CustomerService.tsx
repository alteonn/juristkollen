import { Mail, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { SEO } from '../components/SEO';

export function CustomerService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title="Kundservice | Juristkollen.se"
        description="Kontakta oss för frågor och support. Vi finns här för att hjälpa dig."
      />
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kundservice
            </h1>
            <p className="text-xl text-muted-foreground">
              Har du frågor eller funderingar? Vi finns här för att hjälpa dig.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#646cea]/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#646cea]" />
                    </div>
                    <h2 className="text-xl font-semibold">Besöksadress</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Stjärntorget 2<br />
                    169 79 Solna
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#646cea]/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-[#646cea]" />
                    </div>
                    <h2 className="text-xl font-semibold">E-post</h2>
                  </div>
                  <a 
                    href="mailto:info@juristkollen.se"
                    className="text-[#646cea] hover:underline"
                  >
                    info@juristkollen.se
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-secondary">
                <h2 className="text-2xl font-semibold mb-6">Vanliga frågor</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold mb-2">Hur snabbt får jag svar från en jurist?</h3>
                    <p className="text-muted-foreground">
                      Normalt får du svar från matchade jurister inom 24-48 timmar efter att du skickat in din förfrågan.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Vad kostar det att använda tjänsten?</h3>
                    <p className="text-muted-foreground">
                      Det är helt kostnadsfritt att använda Juristkollen.se för att hitta och matcha med jurister. Du betalar endast för de juridiska tjänster du väljer att köpa.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hur väljer ni ut juristerna?</h3>
                    <p className="text-muted-foreground">
                      Vi har en noggrann kvalitetssäkringsprocess där vi kontrollerar alla juristers legitimation, specialistkompetenser och yrkeserfarenhet innan de får ansluta sig till vår plattform.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
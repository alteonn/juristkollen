import { Shield, Lock, Bell, Database } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { SEO } from '../components/SEO';

export function Cookies() {
  const sections = [
    {
      icon: Shield,
      title: "Vad är cookies?",
      content: `Cookies är små textfiler som lagras på din dator eller mobila enhet när du besöker en webbplats. De hjälper oss att komma ihåg dina preferenser och förbättra din upplevelse på webbplatsen. Cookies kan vara antingen temporära (sessionscookies) som raderas när du stänger webbläsaren, eller permanenta som sparas under en längre tid.`
    },
    {
      icon: Database,
      title: "Vilka cookies använder vi?",
      content: `Vi använder följande typer av cookies:

      • Nödvändiga cookies: Krävs för att webbplatsen ska fungera korrekt
      • Funktionella cookies: Förbättrar användarupplevelsen genom att komma ihåg dina val
      • Analyscookies: Hjälper oss förstå hur besökare använder webbplatsen
      • Marknadsföringscookies: Används för att visa relevant innehåll och annonser`
    },
    {
      icon: Lock,
      title: "Hur skyddar vi din integritet?",
      content: `Vi värnar om din integritet och följer GDPR och andra tillämpliga dataskyddslagar. Vi:

      • Samlar bara in nödvändig information
      • Lagrar data säkert och krypterat
      • Delar aldrig dina uppgifter med obehöriga
      • Ger dig kontroll över dina cookiesinställningar`
    },
    {
      icon: Bell,
      title: "Dina valmöjligheter",
      content: `Du kan när som helst ändra dina cookiesinställningar genom att:

      • Använda cookiesinställningarna på vår webbplats
      • Ändra inställningarna i din webbläsare
      • Rensa befintliga cookies
      
      Observera att vissa grundläggande funktioner kan påverkas om du väljer att blockera nödvändiga cookies.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title="Cookies Policy"
        description="Information om hur Juristkollen.se använder cookies för att förbättra din upplevelse på webbplatsen."
      />
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Cookies Policy</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Här förklarar vi hur vi använder cookies för att förbättra din upplevelse på Juristkollen.se
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <GlassCard key={index}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                      <div className="text-muted-foreground whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">Kontakta oss</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Om du har frågor om hur vi använder cookies, kontakta oss på:
                  </p>
                  <p>
                    E-post: <a href="mailto:info@juristkollen.se" className="text-primary hover:underline">
                      info@juristkollen.se
                    </a>
                  </p>
                  <p>
                    Adress: Stjärntorget 2, 169 79 Solna
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
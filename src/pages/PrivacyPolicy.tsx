import { Shield, Lock, FileCheck, Eye, UserCheck, Clock, Database, Bell } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Personuppgiftsansvar",
      content: `Juristkollen.se är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats. Vi värnar om din personliga integritet och strävar efter att alltid skydda dina personuppgifter på bästa sätt.

      Kontaktuppgifter till personuppgiftsansvarig:
      Juristkollen.se
      Stjärntorget 2
      169 79 Solna
      E-post: info@juristkollen.se`
    },
    {
      icon: Database,
      title: "Insamling av personuppgifter",
      content: `Vi samlar endast in personuppgifter som är nödvändiga för att tillhandahålla våra tjänster. Detta inkluderar:

      • Namn och kontaktuppgifter
      • E-postadress och telefonnummer
      • Information om ditt juridiska ärende
      • Kommunikation mellan dig och oss
      • Teknisk information om hur du använder vår webbplats`
    },
    {
      icon: FileCheck,
      title: "Ändamål med behandlingen",
      content: `Vi behandlar dina personuppgifter för följande ändamål:

      • För att matcha dig med lämpliga jurister
      • För att kommunicera med dig om våra tjänster
      • För att förbättra och utveckla våra tjänster
      • För att uppfylla rättsliga förpliktelser
      • För att skydda våra rättigheter och intressen`
    },
    {
      icon: Lock,
      title: "Säkerhet och skydd",
      content: `Vi vidtar tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter:

      • All data lagras säkert med kryptering
      • Begränsad åtkomst endast för behörig personal
      • Regelbunden säkerhetsöversyn
      • Dokumenterade rutiner för dataskydd`
    },
    {
      icon: Eye,
      title: "Delning av personuppgifter",
      content: `Vi delar endast dina personuppgifter med:

      • Utvalda jurister som kan hjälpa dig med ditt ärende
      • Våra IT-leverantörer som hjälper oss att driva webbplatsen
      • Myndigheter när lagen kräver det
      
      Vi säljer aldrig dina personuppgifter till tredje part.`
    },
    {
      icon: Clock,
      title: "Lagringstid",
      content: `Vi sparar dina personuppgifter endast så länge som det är nödvändigt för de ändamål de samlades in för, eller så länge som krävs enligt lag. När personuppgifterna inte längre behövs raderas de på ett säkert sätt.`
    },
    {
      icon: UserCheck,
      title: "Dina rättigheter",
      content: `Enligt dataskyddsförordningen har du flera rättigheter:

      • Rätt till information om hur dina personuppgifter behandlas
      • Rätt till tillgång till dina personuppgifter
      • Rätt till rättelse av felaktiga personuppgifter
      • Rätt till radering ('rätten att bli bortglömd')
      • Rätt till begränsning av behandling
      • Rätt till dataportabilitet
      • Rätt att göra invändningar mot behandling`
    },
    {
      icon: Bell,
      title: "Ändringar i integritetspolicyn",
      content: `Vi kan komma att uppdatera denna integritetspolicy. När vi gör ändringar som inte är enbart språkliga eller redaktionella kommer vi att informera dig på ett tydligt sätt. Väsentliga ändringar kan vi komma att meddela via e-post om det är nödvändigt.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title="Integritetspolicy"
        description="Information om hur Juristkollen.se hanterar och skyddar dina personuppgifter."
      />
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Integritetspolicy</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Din integritet är viktig för oss. Här förklarar vi hur vi samlar in, använder och skyddar dina personuppgifter.
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
                    Om du har frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter, 
                    kontakta oss på:
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
import { Shield, Lock, FileCheck, Eye, UserCheck, Clock } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';

export function DataProtectionPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Personuppgiftsansvar",
      content: `Juristkollen.se, med organisationsnummer XXX-XXX-XXXX och adress Stjärntorget 2, 169 79 Solna, är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats. Vi värnar om din personliga integritet och strävar efter att alltid skydda dina personuppgifter på bästa sätt.`
    },
    {
      icon: FileCheck,
      title: "Insamling av personuppgifter",
      content: `Vi samlar endast in personuppgifter som är nödvändiga för att tillhandahålla våra tjänster. Detta inkluderar:
      • Namn och kontaktuppgifter
      • E-postadress och telefonnummer
      • Information om ditt juridiska ärende
      • Kommunikation mellan dig och oss
      • Teknisk information om hur du använder vår webbplats`
    },
    {
      icon: Lock,
      title: "Syfte med behandlingen",
      content: `Vi behandlar dina personuppgifter för följande ändamål:
      • För att matcha dig med lämpliga jurister
      • För att kommunicera med dig om våra tjänster
      • För att förbättra och utveckla våra tjänster
      • För att uppfylla rättsliga förpliktelser
      • För att skydda våra rättigheter och intressen`
    },
    {
      icon: UserCheck,
      title: "Rättslig grund",
      content: `Behandlingen av dina personuppgifter sker med stöd av följande rättsliga grunder:
      • Fullgörande av avtal när du använder våra tjänster
      • Berättigat intresse för att utveckla och förbättra våra tjänster
      • Rättslig förpliktelse när lagen kräver det
      • Samtycke i specifika fall där vi ber om det`
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
    }
  ];

  const rights = [
    "Rätt till information om hur dina personuppgifter behandlas",
    "Rätt till tillgång till dina personuppgifter",
    "Rätt till rättelse av felaktiga personuppgifter",
    "Rätt till radering ('rätten att bli bortglömd')",
    "Rätt till begränsning av behandling",
    "Rätt till dataportabilitet",
    "Rätt att göra invändningar mot behandling",
    "Rätt att inte bli föremål för automatiserat beslutsfattande"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Dataskyddspolicy</h1>
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
                <h2 className="text-xl font-semibold mb-6">Dina rättigheter</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {rights.map((right, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{right}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

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
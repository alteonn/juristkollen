import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';

export function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Användarvillkor</h1>
            
            <div className="space-y-8">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">1. Allmänt</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Genom att använda Juristkollen.se accepterar du dessa användarvillkor. 
                    Vi rekommenderar att du läser igenom villkoren noggrant innan du använder tjänsten.
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">2. Tjänsten</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    2.1 Juristkollen.se är en kostnadsfri matchningstjänst som hjälper användare att hitta lämplig juridisk expertis.
                  </p>
                  <p>
                    2.2 När du skickar in en förfrågan via Juristkollen.se kommer du att bli kontaktad av upp till tre jurister som kan hjälpa dig med ditt ärende.
                  </p>
                  <p>
                    2.3 Efter inskickad förfrågan får du en bekräftelse via e-post med information om vilka jurister som kommer att kontakta dig.
                  </p>
                  <p>
                    2.4 Om du vill att din förfrågan ska raderas, kontakta oss via info@juristkollen.se.
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">3. Användning</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    3.1 Det är inte tillåtet att:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Felaktigt utge sig för att ha koppling till Juristkollen.se</li>
                    <li>Försöka få otillbörlig åtkomst till tjänstens system eller användardata</li>
                    <li>Sprida skadlig kod eller på annat sätt störa tjänstens funktion</li>
                    <li>Utge sig för att vara någon annan person</li>
                  </ul>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">4. Ansvar</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    4.1 Juristkollen.se ansvarar endast för att förmedla kontakt mellan användare och jurister. Vi är inte part i de avtal som ingås mellan användare och jurister.
                  </p>
                  <p>
                    4.2 Vi kan inte garantera att juristerna kontaktar användarna eller kvaliteten på juristernas tjänster, men vi strävar efter att endast samarbeta med seriösa aktörer.
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">5. Personuppgifter</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    5.1 Hantering av personuppgifter sker i enlighet med GDPR och vår integritetspolicy.
                  </p>
                  <p>
                    5.2 Information som lämnas i förfrågningar används endast för att matcha dig med lämpliga jurister.
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">6. Ändringar</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    6.1 Vi förbehåller oss rätten att när som helst ändra dessa villkor. Fortsatt användning av tjänsten efter ändringar innebär att du accepterar de nya villkoren.
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-xl font-semibold mb-4">7. Tillämplig lag</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    7.1 Svensk lag tillämpas på dessa villkor och användningen av Juristkollen.se.
                  </p>
                  <p>
                    7.2 Tvister ska i första hand lösas genom förhandling mellan parterna. Om detta inte är möjligt ska tvisten avgöras i svensk domstol.
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
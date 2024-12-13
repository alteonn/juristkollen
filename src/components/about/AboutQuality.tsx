import { GlassCard } from '../ui/GlassCard';

export function AboutQuality() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-6">Kvalitetssäkrad juridisk expertis</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Juristkollen.se är en modern digital plattform som kopplar samman människor och företag med kvalificerad juridisk expertis. Vi är inte en juristbyrå, utan en oberoende matchningstjänst som hjälper dig hitta rätt juridisk kompetens för dina behov.
              </p>
              <p>
                Vår plattform drivs av erfarna tech-entreprenörer med fokus på att göra juridisk expertis mer tillgänglig genom modern teknologi. Vi samarbetar med noggrant utvalda jurister och advokatbyråer över hela Sverige.
              </p>
              <p>
                När du skapar en förfrågan hos oss matchas du med upp till tre jurister som är specialiserade inom ditt område. Detta ger dig möjlighet att jämföra kompetens, erfarenhet och priser för att hitta den jurist som passar dig bäst.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl shrink-0">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">OBSERVERA</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Juristkollen.se är en matchningstjänst som kopplar samman dig med kvalificerade jurister. Vi erbjuder inte juridisk rådgivning, utan hjälper dig att hitta rätt juridisk expertis för dina behov.
                </p>
                <p>
                  Juristkollen.se är en oberoende digital plattform som drivs av erfarna tech-entreprenörer. Vi är inte en juristbyrå, utan en modern matchningstjänst som förenklar processen att hitta rätt juridisk expertis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FileCheck, Scale } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

export function ContractLawInfo() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] opacity-[0.03]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Expertis inom avtalsrätt
          </h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ett välskrivet avtal är grunden för trygga affärsrelationer och samarbeten. Med rätt juridisk expertis kan du förebygga framtida konflikter och säkerställa att dina intressen skyddas på bästa sätt.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oavsett om det gäller affärsavtal, anställningskontrakt eller privata överenskommelser är det viktigt att ha en erfaren jurist som kan guida dig genom processen och säkerställa att alla aspekter täcks in korrekt.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <GlassCard className="flex flex-col items-center text-center p-8">
              <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Specialister inom avtalsrätt
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Våra avtalsrättsjurister har gedigen erfarenhet av att upprätta, granska och förhandla olika typer av avtal för både företag och privatpersoner.
              </p>
              <Button 
                variant="secondary" 
                withArrow 
                className="mt-auto"
                onClick={() => navigate('/search-firms')}
              >
                Hitta avtalsrättsjurist
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center p-8">
              <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                <Scale className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Notarius Publicus
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Vi kan hjälpa dig att komma i kontakt med en Notarius Publicus för officiell bevittning av dokument, verifiering av underskrifter och andra juridiska formaliteter.
              </p>
              <Button 
                variant="secondary" 
                withArrow 
                className="mt-auto"
                onClick={() => navigate('/notarius-publicus')}
              >
                Läs mer
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Scale } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-serif">
              Om <span className="text-primary">Juristkollen</span>
              <span className="text-accent">.se</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Juristkollen.se är Sveriges ledande matchningstjänst för juridisk expertis. 
            Vi hjälper dig att hitta rätt jurist för dina specifika behov, helt kostnadsfritt.
          </p>
        </div>
      </div>
    </section>
  );
}
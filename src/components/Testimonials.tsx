import { Quote } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const testimonials = [
  {
    id: 1,
    quote: "Genom Juristkollen.se hittade vi snabbt en specialist inom företagsförvärv som hjälpte oss genom hela processen. Mycket professionellt och smidigt.",
    author: "Maria Andersson",
    role: "VD, TechStart AB",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "Fantastisk service! Inom 24 timmar hade jag kontakt med tre kompetenta jurister som alla kunde hjälpa mig med mitt ärende. Gjorde processen mycket enklare.",
    author: "Johan Bergström",
    role: "Entreprenör",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "Uppskattar verkligen hur enkelt det var att hitta rätt juridisk expertis för vårt specifika behov. Sparade både tid och resurser.",
    author: "Anna Lindberg",
    role: "Fastighetsutvecklare",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-[0.03]"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vad våra kunder säger
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Läs om hur vi har hjälpt andra att hitta rätt juridisk expertis för deras behov.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard 
              key={testimonial.id}
              className="flex flex-col relative"
            >
              <div className="bg-primary/10 p-3 rounded-2xl w-fit mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <blockquote className="text-lg mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
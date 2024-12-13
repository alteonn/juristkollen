import { GlossaryTerm } from '../../types/glossary';

interface GlossarySectionProps {
  letter: string;
  terms: GlossaryTerm[];
}

export function GlossarySection({ letter, terms }: GlossarySectionProps) {
  if (terms.length === 0) return null;

  return (
    <section id={`letter-${letter}`} className="mb-12 scroll-mt-24">
      <h2 className="text-6xl font-bold text-[#646cea] mb-8">{letter}</h2>
      <div className="space-y-8">
        {terms.map((term, index) => (
          <article key={index} className="space-y-2">
            <h3 className="text-2xl font-semibold">{term.term}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {term.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
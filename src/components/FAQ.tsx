import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from './ui/GlassCard';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <GlassCard 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{question}</h3>
          {isOpen && (
            <p className="text-muted-foreground mt-4 animate-fadeIn">
              {answer}
            </p>
          )}
        </div>
        <div className="bg-secondary p-2 rounded-xl shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Hur mycket kostar det att använda Juristkollen.se?",
      answer: "Juristkollen.se är helt kostnadsfri att använda. Du betalar ingenting för att få förslag på jurister som passar dina behov. Kostnaden uppstår först när du väljer att anlita en jurist, och då enligt dennes villkor."
    },
    {
      question: "Hur väljer ni ut juristerna på plattformen?",
      answer: "Vi har en noggrann urvalsprocess där vi kontrollerar alla juristers legitimation, specialistkompetenser och yrkeserfarenhet. Vi samarbetar endast med etablerade byråer och jurister med dokumenterad expertis inom sina områden."
    },
    {
      question: "Hur snabbt får jag svar från juristerna?",
      answer: "Normalt får du svar från matchade jurister inom 24-48 timmar efter att du skickat in din förfrågan. I akuta ärenden kan vi ofta ordna snabbare kontakt."
    },
    {
      question: "Kan jag vara anonym när jag söker jurist?",
      answer: "Du kan utforska plattformen anonymt, men för att få kontakt med jurister behöver du ange dina kontaktuppgifter. All information behandlas konfidentiellt enligt vår sekretesspolicy."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vanliga frågor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Här hittar du svar på de vanligaste frågorna om hur Juristkollen.se fungerar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
    caseType: 'private', // 'private' or 'business'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { value: 'arbetsratt', label: 'Arbetsrätt', description: 'Anställningsavtal, fackförbund, kollektivavtal, trakasseri, upphovsrätt, uppsägning och nedskärning m.m.' },
    { value: 'asylratt', label: 'Asylrätt och migrationsrätt', description: 'Asylansökan, arbetstillstånd, medborgarskap, uppehållstillstånd, visum m.m.' },
    { value: 'avtal', label: 'Avtal och kontrakt', description: 'Kontrakt mellan privatpersoner eller näringsidkare, konsumenttvister m.m.' },
    { value: 'brottmal', label: 'Brottmål och försvarsadvokat', description: 'Brottmål, ekobrott, målsägandebiträde, trafikbrott och körkort m.m.' },
    { value: 'familjeratt', label: 'Familjerätt', description: 'Adoption, bodelning, dödsbo, skilsmässa, testamente, vårdnad och umgänge m.m.' },
    { value: 'fastighetsratt', label: 'Fastighetsrätt', description: 'Arrende, bygglov, entreprenad, hyra, köp och försäljning, miljörätt m.m.' },
    { value: 'forvaltningsratt', label: 'Förvaltningsrätt', description: 'Felaktig handläggning, socialförsäkring, överklaga beslut m.m.' },
    { value: 'konsumentratt', label: 'Konsumenträtt', description: 'Avtal och kontrakt, reklamation, resa m.m.' },
    { value: 'skadestand', label: 'Skada och ersättning', description: 'Ersättning, sjukdom, skada, utbetalning m.m.' },
    { value: 'skatt', label: 'Skatt och finans', description: 'Betalning, deklaration, moms, överklagande m.m.' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        arendetyp: formData.caseType === 'private' ? 'Privatperson' : 'Företag',
        namn: formData.name,
        epost: formData.email,
        telefon: formData.phone || 'Ej angivet',
        foretag: formData.company || 'Ej angivet',
        rattsomrade: serviceTypes.find(t => t.value === formData.serviceType)?.label || 'Ej valt',
        beskrivning: formData.message
      };

      const response = await fetch('https://hooks.zapier.com/hooks/catch/20475824/2szno5u/', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          message: '',
          caseType: 'private',
        });
      } else {
        throw new Error('Något gick fel vid skickandet av formuläret');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ett fel uppstod. Vänligen försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Få hjälp med ditt juridiska ärende
          </h2>
          <p className="text-xl text-muted-foreground">
            Beskriv ditt ärende så matchar vi dig med rätt juridisk expertis inom 24 timmar
          </p>
        </div>

        <GlassCard className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Tack för din förfrågan!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Vi har mottagit ditt ärende och kommer att matcha dig med lämpliga jurister inom kort. 
                Du kommer att bli kontaktad via e-post inom 24 timmar.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex gap-4 p-2 bg-secondary/50 rounded-xl">
                <button
                  type="button"
                  className={`flex-1 py-3 px-6 rounded-lg transition-all ${
                    formData.caseType === 'private' 
                      ? 'bg-white shadow-lg' 
                      : 'hover:bg-white/50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, caseType: 'private' }))}
                >
                  Privatperson
                </button>
                <button
                  type="button"
                  className={`flex-1 py-3 px-6 rounded-lg transition-all ${
                    formData.caseType === 'business' 
                      ? 'bg-white shadow-lg' 
                      : 'hover:bg-white/50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, caseType: 'business' }))}
                >
                  Företag
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Namn *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Ditt namn"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      E-post *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="din.epost@exempel.se"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Ditt telefonnummer"
                    />
                  </div>

                  {formData.caseType === 'business' && (
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium">
                        Företag *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required={formData.caseType === 'business'}
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                                 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Företagets namn"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="serviceType" className="block text-sm font-medium">
                    Typ av ärende *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Välj typ av ärende</option>
                    {serviceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.serviceType && (
                  <div className="bg-secondary/30 p-4 rounded-xl text-sm text-muted-foreground">
                    {serviceTypes.find(t => t.value === formData.serviceType)?.description}
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Beskriv ditt ärende *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Beskriv kort vad du behöver hjälp med..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Genom att skicka in formuläret godkänner du vår{' '}
                  <a href="/integritetspolicy" className="text-primary hover:text-primary/90 transition-colors">
                    integritetspolicy
                  </a>
                </p>
              </div>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
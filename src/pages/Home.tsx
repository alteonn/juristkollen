import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ServiceTypes } from '../components/ServiceTypes';
import { ContractLawInfo } from '../components/ContractLawInfo';
import { RecommendedLawyers } from '../components/RecommendedLawyers';
import { Articles } from '../components/Articles';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Disclaimer } from '../components/Disclaimer';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Hitta rätt jurist för dina behov"
        description="Juristkollen.se hjälper dig att hitta rätt juridisk expertis. Vi matchar dig med erfarna jurister inom ditt specifika rättsområde."
      />
      <Navbar />
      <Hero />
      <ServiceTypes />
      <ContractLawInfo />
      <RecommendedLawyers />
      <Articles />
      <FAQ />
      <ContactForm />
      <Disclaimer />
      <Footer />
    </div>
  );
}
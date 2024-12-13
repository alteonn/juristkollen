import { CityConfig } from '../../types/city';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { SEO } from '../SEO';
import { CityHero } from './CityHero';
import { CityServices } from './CityServices';
import { CityLawyers } from './CityLawyers';
import { CityArticles } from './CityArticles';
import { CityFAQ } from './CityFAQ';
import { ContactForm } from '../ContactForm';
import { Disclaimer } from '../Disclaimer';

interface CityTemplateProps {
  config: CityConfig;
}

export function CityTemplate({ config }: CityTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <SEO 
        title={config.meta.title}
        description={config.meta.description}
      />
      <Navbar />
      
      <main>
        <CityHero 
          title={config.hero.title}
          description={config.hero.description}
          cityName={config.name}
        />

        <CityServices 
          cityName={config.name}
          title={config.sections.services.title}
          description={config.sections.services.description}
        />

        <CityLawyers 
          cityName={config.name}
          title={config.sections.lawyers.title}
          description={config.sections.lawyers.description}
        />

        <CityArticles 
          cityName={config.name}
          title={config.sections.articles.title}
          description={config.sections.articles.description}
        />

        <CityFAQ 
          cityName={config.name}
          title={config.sections.faq.title}
          description={config.sections.faq.description}
        />

        <ContactForm />
        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
}
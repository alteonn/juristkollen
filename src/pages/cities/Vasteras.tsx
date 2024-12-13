import { CityTemplate } from '../../components/city/CityTemplate';

export function Vasteras() {
  const cityData = {
    name: 'Västerås',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Västerås | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Västerås. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Västerås',
    heroDescription: 'Vi matchar dig med Västerås främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Västerås',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Västeråsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Västerås',
    contractDescription: 'Västerås ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Västerås',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Västerås främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Västerås',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Västeråsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Västerås',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Västerås.'
  };

  return <CityTemplate city={cityData} />;
}
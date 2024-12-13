import { CityTemplate } from '../../components/city/CityTemplate';

export function Boras() {
  const cityData = {
    name: 'Borås',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Borås | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Borås. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Borås',
    heroDescription: 'Vi matchar dig med Borås främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Borås',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Boråsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Borås',
    contractDescription: 'Borås ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Borås',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Borås främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Borås',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Boråsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Borås',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Borås.'
  };

  return <CityTemplate city={cityData} />;
}
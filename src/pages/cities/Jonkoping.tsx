import { CityTemplate } from '../../components/city/CityTemplate';

export function Jonkoping() {
  const cityData = {
    name: 'Jönköping',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Jönköping | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Jönköping. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Jönköping',
    heroDescription: 'Vi matchar dig med Jönköpings främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Jönköping',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Jönköpingsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Jönköping',
    contractDescription: 'Jönköpings ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Jönköping',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Jönköpings främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Jönköping',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Jönköpingsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Jönköping',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Jönköping.'
  };

  return <CityTemplate city={cityData} />;
}
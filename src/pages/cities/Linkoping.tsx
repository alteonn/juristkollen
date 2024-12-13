import { CityTemplate } from '../../components/city/CityTemplate';

export function Linkoping() {
  const cityData = {
    name: 'Linköping',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Linköping | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Linköping. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Linköping',
    heroDescription: 'Vi matchar dig med Linköpings främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Linköping',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Linköpingsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Linköping',
    contractDescription: 'Linköpings ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Linköping',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Linköpings främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Linköping',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Linköpingsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Linköping',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Linköping.'
  };

  return <CityTemplate city={cityData} />;
}
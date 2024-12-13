import { CityTemplate } from '../../components/city/CityTemplate';

export function Norrkoping() {
  const cityData = {
    name: 'Norrköping',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Norrköping | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Norrköping. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Norrköping',
    heroDescription: 'Vi matchar dig med Norrköpings främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Norrköping',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Norrköpingsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Norrköping',
    contractDescription: 'Norrköpings ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Norrköping',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Norrköpings främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Norrköping',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Norrköpingsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Norrköping',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Norrköping.'
  };

  return <CityTemplate city={cityData} />;
}
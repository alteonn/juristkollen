import { CityTemplate } from '../../components/city/CityTemplate';

export function Uppsala() {
  const cityData = {
    name: 'Uppsala',
    description: 'Sveriges fjärde största stad',
    seoTitle: 'Hitta Jurist i Uppsala | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Uppsala. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Uppsala',
    heroDescription: 'Vi matchar dig med Uppsalas främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Uppsala',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Uppsalaområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Uppsala',
    contractDescription: 'Uppsalas ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Uppsala',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Uppsalas främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Uppsala',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Uppsalaområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Uppsala',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Uppsala.'
  };

  return <CityTemplate city={cityData} />;
}
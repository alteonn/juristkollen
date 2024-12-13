import { CityTemplate } from '../../components/city/CityTemplate';

export function Umea() {
  const cityData = {
    name: 'Umeå',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Umeå | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Umeå. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Umeå',
    heroDescription: 'Vi matchar dig med Umeås främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Umeå',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Umeåområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Umeå',
    contractDescription: 'Umeås ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Umeå',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Umeås främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Umeå',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Umeåområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Umeå',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Umeå.'
  };

  return <CityTemplate city={cityData} />;
}
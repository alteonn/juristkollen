import { CityTemplate } from '../../components/city/CityTemplate';

export function Lulea() {
  const cityData = {
    name: 'Luleå',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Luleå | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Luleå. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Luleå',
    heroDescription: 'Vi matchar dig med Luleås främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Luleå',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Luleåområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Luleå',
    contractDescription: 'Luleås ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Luleå',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Luleås främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Luleå',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Luleåområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Luleå',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Luleå.'
  };

  return <CityTemplate city={cityData} />;
}
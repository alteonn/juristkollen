import { CityTemplate } from '../../components/city/CityTemplate';

export function Orebro() {
  const cityData = {
    name: 'Örebro',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Örebro | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Örebro. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Örebro',
    heroDescription: 'Vi matchar dig med Örebros främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Örebro',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Örebroområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Örebro',
    contractDescription: 'Örebros ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Örebro',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Örebros främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Örebro',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Örebroområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Örebro',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Örebro.'
  };

  return <CityTemplate city={cityData} />;
}
import { CityTemplate } from '../../components/city/CityTemplate';

export function Falun() {
  const cityData = {
    name: 'Falun',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Falun | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Falun. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Falun',
    heroDescription: 'Vi matchar dig med Faluns främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Falun',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Faluområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Falun',
    contractDescription: 'Faluns ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Falun',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Faluns främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Falun',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Faluområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Falun',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Falun.'
  };

  return <CityTemplate city={cityData} />;
}
import { CityTemplate } from '../../components/city/CityTemplate';

export function Karlstad() {
  const cityData = {
    name: 'Karlstad',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Karlstad | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Karlstad. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Karlstad',
    heroDescription: 'Vi matchar dig med Karlstads främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Karlstad',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Karlstadsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Karlstad',
    contractDescription: 'Karlstads ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Karlstad',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Karlstads främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Karlstad',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Karlstadsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Karlstad',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Karlstad.'
  };

  return <CityTemplate city={cityData} />;
}
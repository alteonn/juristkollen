import { CityTemplate } from '../../components/city/CityTemplate';

export function Helsingborg() {
  const cityData = {
    name: 'Helsingborg',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Helsingborg | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Helsingborg. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Helsingborg',
    heroDescription: 'Vi matchar dig med Helsingborgs främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Helsingborg',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Helsingborgsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Helsingborg',
    contractDescription: 'Helsingborgs ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Helsingborg',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Helsingborgs främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Helsingborg',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Helsingborgsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Helsingborg',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Helsingborg.'
  };

  return <CityTemplate city={cityData} />;
}
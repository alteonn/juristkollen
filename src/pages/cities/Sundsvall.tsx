import { CityTemplate } from '../../components/city/CityTemplate';

export function Sundsvall() {
  const cityData = {
    name: 'Sundsvall',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Sundsvall | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Sundsvall. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Sundsvall',
    heroDescription: 'Vi matchar dig med Sundsvalls främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Sundsvall',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Sundsvallsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Sundsvall',
    contractDescription: 'Sundsvalls ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Sundsvall',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Sundsvalls främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Sundsvall',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Sundsvallsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Sundsvall',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Sundsvall.'
  };

  return <CityTemplate city={cityData} />;
}
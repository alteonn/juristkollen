import { CityTemplate } from '../../components/city/CityTemplate';

export function Lund() {
  const cityData = {
    name: 'Lund',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Lund | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Lund. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Lund',
    heroDescription: 'Vi matchar dig med Lunds främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Lund',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Lundsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Lund',
    contractDescription: 'Lunds ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Lund',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Lunds främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Lund',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Lundsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Lund',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Lund.'
  };

  return <CityTemplate city={cityData} />;
}
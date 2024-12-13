import { CityTemplate } from '../../components/city/CityTemplate';

export function Malmo() {
  const cityData = {
    name: 'Malmö',
    description: 'Sveriges tredje största stad',
    seoTitle: 'Hitta Jurist i Malmö | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Malmö. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Malmö',
    heroDescription: 'Vi matchar dig med Malmös främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Malmö',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Malmöområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Malmö',
    contractDescription: 'Malmös ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Malmö',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Malmös främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Malmö',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Malmöområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Malmö',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Malmö.'
  };

  return <CityTemplate city={cityData} />;
}
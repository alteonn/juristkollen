import { CityTemplate } from '../../components/city/CityTemplate';

export function Stockholm() {
  const cityData = {
    name: 'Stockholm',
    description: 'Sveriges huvudstad och största stad',
    seoTitle: 'Hitta Jurist i Stockholm | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Stockholm. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Stockholm',
    heroDescription: 'Vi matchar dig med Stockholms främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Stockholm',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Stockholmsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Stockholm',
    contractDescription: 'Stockholms ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Stockholm',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Stockholms främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Stockholm',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Stockholmsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Stockholm',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Stockholm.'
  };

  return <CityTemplate city={cityData} />;
}
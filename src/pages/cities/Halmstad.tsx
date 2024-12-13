import { CityTemplate } from '../../components/city/CityTemplate';

export function Halmstad() {
  const cityData = {
    name: 'Halmstad',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Halmstad | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Halmstad. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Halmstad',
    heroDescription: 'Vi matchar dig med Halmstads främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Halmstad',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Halmstadsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Halmstad',
    contractDescription: 'Halmstads ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Halmstad',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Halmstads främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Halmstad',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Halmstadsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Halmstad',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Halmstad.'
  };

  return <CityTemplate city={cityData} />;
}
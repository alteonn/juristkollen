import { CityTemplate } from '../../components/city/CityTemplate';

export function Gavle() {
  const cityData = {
    name: 'Gävle',
    description: 'En av Sveriges största städer',
    seoTitle: 'Hitta Jurist i Gävle | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Gävle. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Gävle',
    heroDescription: 'Vi matchar dig med Gävles främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Gävle',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Gävleområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Gävle',
    contractDescription: 'Gävles ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Gävle',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Gävles främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Gävle',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Gävleområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Gävle',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Gävle.'
  };

  return <CityTemplate city={cityData} />;
}
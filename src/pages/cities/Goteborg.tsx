import { CityTemplate } from '../../components/city/CityTemplate';

export function Goteborg() {
  const cityData = {
    name: 'Göteborg',
    description: 'Sveriges andra största stad',
    seoTitle: 'Hitta Jurist i Göteborg | Juridisk Rådgivning & Experthjälp',
    seoDescription: 'Få hjälp av erfarna jurister i Göteborg. Vi matchar dig med rätt juridisk expertis för dina behov. Kostnadsfri matchning och snabbt svar.',
    heroTitle: 'Hitta rätt jurist i Göteborg',
    heroDescription: 'Vi matchar dig med Göteborgs främsta jurister inom ditt specifika rättsområde. Kostnadsfri matchning och svar inom 24 timmar.',
    serviceTitle: 'Juridiska tjänster i Göteborg',
    serviceDescription: 'Upptäck vårt breda nätverk av specialiserade jurister i Göteborgsområdet. Vi hjälper dig hitta rätt expertis för just ditt ärende.',
    contractTitle: 'Avtalsrätt i Göteborg',
    contractDescription: 'Göteborgs ledande jurister inom avtalsrätt hjälper dig att upprätta, granska och förhandla olika typer av avtal.',
    recommendedTitle: 'Rekommenderade byråer i Göteborg',
    recommendedDescription: 'Utforska våra noggrant utvalda samarbetspartners bland Göteborgs främsta advokatbyråer.',
    articlesTitle: 'Juridiska nyheter från Göteborg',
    articlesDescription: 'Håll dig uppdaterad med de senaste juridiska nyheterna och analyserna från Göteborgsområdet.',
    faqTitle: 'Vanliga frågor om juridisk hjälp i Göteborg',
    faqDescription: 'Få svar på vanliga frågor om juridiska tjänster och processer i Göteborg.'
  };

  return <CityTemplate city={cityData} />;
}
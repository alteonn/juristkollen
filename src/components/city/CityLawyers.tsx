import { CitySection } from './CitySection';
import { PartnerList } from './PartnerList';

interface CityLawyersProps {
  cityName: string;
  title: string;
  description: string;
}

export function CityLawyers({ cityName, title, description }: CityLawyersProps) {
  return (
    <CitySection 
      title={title}
      description={description}
      variant="dark"
    >
      <PartnerList cityName={cityName} />
    </CitySection>
  );
}
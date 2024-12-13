import { CitySection } from './CitySection';
import { ServiceTypes } from '../ServiceTypes';

interface CityServicesProps {
  cityName: string;
  title: string;
  description: string;
}

export function CityServices({ cityName, title, description }: CityServicesProps) {
  return (
    <CitySection 
      title={title}
      description={description}
      variant="light"
      className="mt-24"
    >
      <ServiceTypes citySpecific={true} cityName={cityName} />
    </CitySection>
  );
}
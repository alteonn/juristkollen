import { CitySection } from './CitySection';
import { FAQ } from '../FAQ';

interface CityFAQProps {
  cityName: string;
  title: string;
  description: string;
}

export function CityFAQ({ cityName, title, description }: CityFAQProps) {
  return (
    <CitySection 
      title={title}
      description={description}
      variant="dark"
    >
      <FAQ citySpecific={true} cityName={cityName} />
    </CitySection>
  );
}
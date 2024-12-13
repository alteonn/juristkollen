import { CitySection } from './CitySection';
import { Articles } from '../Articles';

interface CityArticlesProps {
  cityName: string;
  title: string;
  description: string;
}

export function CityArticles({ cityName, title, description }: CityArticlesProps) {
  return (
    <CitySection 
      title={title}
      description={description}
      variant="light"
    >
      <Articles citySpecific={true} cityName={cityName} />
    </CitySection>
  );
}
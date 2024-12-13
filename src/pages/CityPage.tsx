import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCityConfig } from '../config/cities';
import { CityTemplate } from '../components/city/CityTemplate';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!citySlug) {
      navigate('/', { replace: true });
      return;
    }

    const cityConfig = getCityConfig(citySlug);
    if (!cityConfig) {
      navigate('/', { replace: true });
    }
  }, [citySlug, navigate]);

  if (!citySlug) {
    return <LoadingSpinner />;
  }

  const cityConfig = getCityConfig(citySlug);
  if (!cityConfig) {
    return null;
  }

  return <CityTemplate config={cityConfig} />;
}
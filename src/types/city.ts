export interface CityMeta {
  title: string;
  description: string;
}

export interface CitySection {
  title: string;
  description: string;
}

export interface CityConfig {
  name: string;
  slug: string;
  description: string;
  meta: CityMeta;
  hero: {
    title: string;
    description: string;
  };
  sections: {
    services: CitySection;
    lawyers: CitySection;
    articles: CitySection;
    faq: CitySection;
  };
}

export interface City {
  name: string;
  slug: string;
  path: string;
}
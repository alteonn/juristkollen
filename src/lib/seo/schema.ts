export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Juristkollen.se',
  url: 'https://juristkollen.se',
  logo: 'https://juristkollen.se/logo.png',
  description: 'Din guide till juridisk expertis. Vi matchar dig med rätt jurist för dina behov.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Stjärntorget 2',
    addressLocality: 'Solna',
    postalCode: '169 79',
    addressCountry: 'SE'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '',
    contactType: 'customer service',
    email: 'info@juristkollen.se',
    availableLanguage: ['Swedish']
  }
});

export const generateLegalServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: service.name,
  description: service.description,
  url: service.url,
  provider: {
    '@type': 'Organization',
    name: 'Juristkollen.se'
  }
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.imageUrl,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Organization',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Juristkollen.se',
    logo: {
      '@type': 'ImageObject',
      url: 'https://juristkollen.se/logo.png'
    }
  }
});
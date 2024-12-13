interface MetaProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

export const generateMeta = ({
  title,
  description,
  canonicalUrl,
  imageUrl = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
  type = 'website',
  keywords = []
}: MetaProps) => {
  const defaultKeywords = [
    'jurist',
    'advokat',
    'juridisk hjälp',
    'juridisk rådgivning',
    'Sverige',
    'rättshjälp'
  ];

  return {
    title: `${title} | Juristkollen.se`,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'keywords',
        content: [...defaultKeywords, ...keywords].join(', ')
      },
      // Open Graph
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: type
      },
      {
        property: 'og:image',
        content: imageUrl
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: imageUrl
      }
    ],
    link: canonicalUrl ? [
      {
        rel: 'canonical',
        href: canonicalUrl
      }
    ] : []
  };
};
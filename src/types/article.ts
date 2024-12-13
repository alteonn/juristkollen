export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  excerpt: string;
  image_url?: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  readTime?: string;
}
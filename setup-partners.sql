-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create partners table if it doesn't exist
CREATE TABLE IF NOT EXISTS partners (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  website TEXT,
  city TEXT NOT NULL,
  description TEXT NOT NULL,
  specialties TEXT[] NOT NULL DEFAULT '{}',
  languages TEXT[] NOT NULL DEFAULT '{}',
  logo TEXT,
  featured BOOLEAN DEFAULT false,
  featured_order INTEGER,
  team_members JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS partners_name_idx ON partners USING gin (to_tsvector('swedish', name));
CREATE INDEX IF NOT EXISTS partners_city_idx ON partners USING gin (to_tsvector('swedish', city));
CREATE INDEX IF NOT EXISTS partners_featured_idx ON partners(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS partners_featured_order_idx ON partners(featured_order) WHERE featured = true;

-- Grant necessary permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO postgres, authenticated;
GRANT USAGE ON SCHEMA public TO postgres, authenticated;

-- Disable RLS for now (we'll add proper policies later)
ALTER TABLE partners DISABLE ROW LEVEL SECURITY;
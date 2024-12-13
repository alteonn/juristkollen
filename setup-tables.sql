-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist
DROP TABLE IF EXISTS partners CASCADE;

-- Create partners table with team_members as JSONB
CREATE TABLE partners (
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

-- Create storage buckets if they don't exist
INSERT INTO storage.buckets (id, name, public)
SELECT 'partner-logos', 'partner-logos', true
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'partner-logos');

INSERT INTO storage.buckets (id, name, public)
SELECT 'team-photos', 'team-photos', true
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'team-photos');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at trigger
DROP TRIGGER IF EXISTS update_partners_updated_at ON partners;
CREATE TRIGGER update_partners_updated_at
  BEFORE UPDATE ON partners
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS partners_name_idx ON partners USING gin (to_tsvector('swedish', name));
CREATE INDEX IF NOT EXISTS partners_city_idx ON partners USING gin (to_tsvector('swedish', city));
CREATE INDEX IF NOT EXISTS partners_featured_idx ON partners(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS partners_featured_order_idx ON partners(featured_order) WHERE featured = true;
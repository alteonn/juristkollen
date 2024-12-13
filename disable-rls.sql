-- Drop existing policies
DROP POLICY IF EXISTS "Public partners are viewable by everyone" ON partners;
DROP POLICY IF EXISTS "Partners are insertable by authenticated users only" ON partners;
DROP POLICY IF EXISTS "Partners are updatable by authenticated users only" ON partners;
DROP POLICY IF EXISTS "Partners are deletable by authenticated users only" ON partners;
DROP POLICY IF EXISTS "Public team members are viewable by everyone" ON team_members;
DROP POLICY IF EXISTS "Team members are insertable by authenticated users only" ON team_members;
DROP POLICY IF EXISTS "Team members are updatable by authenticated users only" ON team_members;
DROP POLICY IF EXISTS "Team members are deletable by authenticated users only" ON team_members;

-- Create extension if it doesn't exist
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Disable RLS
ALTER TABLE IF EXISTS partners DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS team_members DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS storage.objects DISABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO postgres, authenticated;
GRANT USAGE ON SCHEMA public TO postgres, authenticated;
GRANT USAGE ON SCHEMA storage TO postgres, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA storage TO postgres, authenticated;

-- Grant extension usage
GRANT USAGE ON SCHEMA public TO postgres, authenticated;
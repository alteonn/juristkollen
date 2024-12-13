-- Enable RLS on all tables
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Create admin role function
CREATE OR REPLACE FUNCTION auth.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    auth.jwt() ->> 'email' = 'info@juristkollen.se'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Articles policies
CREATE POLICY "Articles are viewable by everyone"
ON articles FOR SELECT
USING (published = true OR auth.is_admin());

CREATE POLICY "Articles are editable by admin"
ON articles FOR ALL
USING (auth.is_admin())
WITH CHECK (auth.is_admin());

-- Partners policies
CREATE POLICY "Partners are viewable by everyone"
ON partners FOR SELECT
TO PUBLIC
USING (true);

CREATE POLICY "Partners are editable by admin"
ON partners FOR ALL
USING (auth.is_admin())
WITH CHECK (auth.is_admin());

-- Storage policies
CREATE POLICY "Public can read all storage objects"
ON storage.objects FOR SELECT
TO PUBLIC
USING (true);

CREATE POLICY "Only admin can upload files"
ON storage.objects FOR INSERT
USING (auth.is_admin())
WITH CHECK (auth.is_admin());

-- Grant basic permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;
-- Add featured column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'partners' AND column_name = 'featured') THEN
        ALTER TABLE partners ADD COLUMN featured BOOLEAN DEFAULT false;
    END IF;
END $$;

-- Add featured_order column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'partners' AND column_name = 'featured_order') THEN
        ALTER TABLE partners ADD COLUMN featured_order INTEGER;
    END IF;
END $$;

-- Create index for featured partners
CREATE INDEX IF NOT EXISTS partners_featured_idx ON partners(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS partners_featured_order_idx ON partners(featured_order) WHERE featured = true;

-- Update existing partners to be featured (adjust this query based on which partners you want featured)
UPDATE partners 
SET featured = true, 
    featured_order = row_number
FROM (
    SELECT id, ROW_NUMBER() OVER (ORDER BY created_at) as row_number 
    FROM partners 
    LIMIT 6
) subquery
WHERE partners.id = subquery.id;
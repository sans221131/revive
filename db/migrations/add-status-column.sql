-- Add status column to contacts table
ALTER TABLE contacts 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'new' NOT NULL;

-- Update existing rows to have 'new' status if they don't have one
UPDATE contacts 
SET status = 'new' 
WHERE status IS NULL;

# Database Migration Instructions

## Adding Status Column to Contacts Table

You need to run the SQL migration to add the `status` column to your database.

### Option 1: Using Neon Dashboard (Recommended)

1. Go to your Neon database dashboard: https://console.neon.tech
2. Navigate to your project
3. Click on the "SQL Editor" tab
4. Copy and paste the following SQL:

```sql
ALTER TABLE contacts 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'new' NOT NULL;

UPDATE contacts 
SET status = 'new' 
WHERE status IS NULL;
```

5. Click "Run" to execute the migration

### Option 2: Using psql or any PostgreSQL client

If you have PostgreSQL client tools installed:

```bash
psql "YOUR_NEON_DATABASE_URL" -f db/migrations/add-status-column.sql
```

### Verification

After running the migration, verify it worked by running:

```sql
SELECT * FROM contacts LIMIT 1;
```

You should see the `status` column in the results.

### What this migration does:

- Adds a `status` column to the `contacts` table
- Sets default value to 'new' for all new records
- Updates existing records to have 'new' status

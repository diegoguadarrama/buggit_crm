import { createClient } from '@supabase/supabase-js';

// Check if environment variables are set
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  throw new Error(
    'Please click the "Connect to Supabase" button in the top right corner to set up your database connection.'
  );
}

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cftkogftngijjaqdprxe.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdGtvZ2Z0bmdpamphcWRwcnhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5ODcxMTIsImV4cCI6MjAwOTU2MzExMn0.sOCinbUmIMML_reNjKH-hPIZ4X4MIouZ1mwuuOeJaIg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

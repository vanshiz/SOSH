import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tkjupthsrsormikjylok.supabase.co'
const supabaseKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRranVwdGhzcnNvcm1pa2p5bG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjk1MTUsImV4cCI6MjAwMzY0NTUxNX0.lVdLtcZ6-zDLfI--eDnAPTHUd4aQumR3XahsGxdUc2U";
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
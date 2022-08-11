import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// export const supabaseUrl = 'https://tfsdsszfwbepjxsityfw.supabase.co'
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc2Rzc3pmd2JlcGp4c2l0eWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk0NDM5NTMsImV4cCI6MTk3NTAxOTk1M30.MeRIvCQX-09eQvMgQR62ei4dD9S_NOVwpi_8waL3-NE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
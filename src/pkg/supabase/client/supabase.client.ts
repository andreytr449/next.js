import { createBrowserClient } from '@supabase/ssr'

import { envClient } from '@/config/env'

// variables
const supabaseUrl = envClient.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = envClient.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

// create client
export const createClient = () => createBrowserClient(supabaseUrl!, supabaseKey!)

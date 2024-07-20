import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://bwmcarxzizswklrvxdsr.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTIwOTM2NCwiZXhwIjoxOTQwNzg1MzY0fQ._naOVCctAlVHII6SqS79016t0DfkHq9GheiA5XOPVqc'

export const supabase = createClient(supabaseUrl, SUPABASE_KEY)
console.log(supabase)

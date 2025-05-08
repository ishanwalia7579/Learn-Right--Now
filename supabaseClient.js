import { createClient } from '@supabase/supabase-js'

// 🔁 Replace with your actual keys from Supabase dashboard
const supabaseUrl = 'https://zwampdxzijsfqaaypzpj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YW1wZHh6aWpzZnFhYXlwenBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2OTQ4MTcsImV4cCI6MjA2MjI3MDgxN30.Q6zew_il6uKxUNon0AllVKZJ6-qnHYMqBRwWQZ7oa18';

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://zohphnqqipwjrwdqrbem.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvaHBobnFxaXB3anJ3ZHFyYmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzNzA2MDYsImV4cCI6MTk3Nzk0NjYwNn0.ZyTI5-LkirJbT4q0a20u16MIVeRBbqWcb-GEoCKcjVk";

const supabaseKey = import.meta.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

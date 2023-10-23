import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zbtvznkdrdamnuqwqwwb.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpidHZ6bmtkcmRhbW51cXdxd3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxODk1NzQsImV4cCI6MjAwODc2NTU3NH0.BpvhVl1O3JpsQQq_dSA7VGno9jxAHWBFgfeFfjXBEQI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

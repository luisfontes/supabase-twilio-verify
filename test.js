import 'dotenv/config';

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const { data, error } = await supabase.auth.signInWithOtp({
	phone: PHONE_NUMBER,
	options: {
		channel: 'whatsapp'
	}
});

console.log('data');
console.log(data);
console.log('error');
console.log(error);
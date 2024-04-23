'use server'
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export default async function fetchEvent() {
    const CookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => CookieStore });
   try{
    const {data,error} = await supabase 
    .from('mits_event')
    .select('event_name','event_date','event_desc','event_venue');
    if(error){
        throw error
    }
    return data;
    }catch(error){
        console.error('Error fetching data',error);
        return;
    }
}
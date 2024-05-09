'use server'
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
const CookieStore = cookies();
const supabase = createServerActionClient({ cookies: () => CookieStore });

export default async function fetchEvent() {
   try{
    const {data,error} = await supabase 
    .from('mits_event')
    .select('*');

    console.log(data,error);
    if(error){
        throw error
    }
    return data;
    }catch(error){
        console.error('Error fetching data',error);
        return;
    }
}
export async function getInventory (){
    //const CookieStore = cookies();
   // const supabase = createServerActionClient({ cookies: () => CookieStore });
    try{  
        const { data , error } = await supabase
        .from('inventory_db')
        .select('*')
        console.log(data,error);
        if( data === null){
            console.log('No data found');
        }
        if(error){
            throw error;
        }
        return data;
        }catch(error){
        console.error('Error fetching data',error);
        return;
    }
}
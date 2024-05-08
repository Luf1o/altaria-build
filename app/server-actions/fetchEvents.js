'use server'
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export default async function fetchEvent() {
    const CookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => CookieStore });
   try{
    const {data,error} = await supabase 
    .from('mits_event')
    .select('*');

    //console.log(data,error);
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
    const CookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => CookieStore });
    try{
        const {data,error} = await supabase 
        .from('inventory')
        .select('*');
    
        //console.log(data,error);
        if(error){
            throw error
        }
        return data;
        }catch(error){
            console.error('Error fetching data',error);
            return;
        }
    return <div>
        Inventory
    </div>
}
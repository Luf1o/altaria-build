'use server'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export async function GetUser() {
    const CookiesStore = cookies();
    const supabase = createServerActionClient({cookies: () =>CookiesStore});
    const {data: {session}} = await supabase.auth.getSession(); 
    const user = session?.user;
    if(!user){
        return null;
    }
    else{
        try{
            const {dat: {users},error} = await supabase
            .from('users')
            .select('*');
            if(error) throw error

        }catch(error){
            console.log('Error fetching user data :',error)
        } 
    }
}
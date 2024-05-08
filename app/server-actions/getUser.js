'use server'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export async function GetUser() {
    const CookiesStore = cookies();
    const supabase = createServerActionClient({cookies: () =>CookiesStore});
    const {data: {session}} = await supabase.auth.getSession(); 
    const user = session?.user;
    const returnUser = [];
    const email = user? user.email : null;
    console.log('User Data :',email);
    if(email === '21cs095@mgits.ac.in'){
        console.log('Welcome Admin');
        returnUser.push({email : email,role :'admin'});
    }
    else{
        console.log('Welcome User');
        returnUser.push({email: email,role: 'user'});
    }
    return returnUser;
}
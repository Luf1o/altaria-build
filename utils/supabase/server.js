import { createServerClient,DEFAULT_COOKIE_OPTIONS as cookies_default } from "@supabase/ssr";
import { cookies } from "next/headers";
export const createClient =     () =>{
    const cookieStore = cookies();
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_KEY,
        {
            cookies : {
                get(name){
                    return cookieStore.get(name)?.value;
                }
            },
            set(name,value,cookies_default){
                try{
                    cookieStore.set({ name,value,...cookies_default})
                }
                catch(error){
                    console.error('cookie set error',error);
                }
            },
            remove(name,cookies_default){
                try{
                    cookieStore.set({ name,value:'',...cookies_default})
                }catch(error){
                    console.error('cookie remove error',error);
                }
            }
        }
    )
    
}
'use server'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
export default async function deleteEvent(events_data){
    const cookieStore = cookies();
    const supabase = createServerActionClient({cookies: () => cookieStore});

    console.log('Event ID :',events_data.links.id)

    const {data: {session},error} = await supabase.auth.getSession();
    const user = session?.user;
    //console.log(e)
    if(!user){
        console.log('User is not authenticated for deleting events');
        return;
    }
    if(user){
        const {data,error} = await supabase
            .from('mits_event')
            .delete()
            .eq('id',events_data.links.id)
            .eq('user_id',user.id)
        if(error){
            console.error('Error deleting data',error);
            return;
        }
    }
    revalidatePath('/dashboard');
    return {message : "event deleted successfully"}
}
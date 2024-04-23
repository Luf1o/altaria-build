'use server'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export default async function addEvent(formData){
    const eventname = formData.get('event-name');
    const eventhost = formData.get('event-host');
    const eventdate = formData.get('event-date');
    const eventdata = formData.get('event-desc');
    const eventvenue = formData.get('event-venue')

    //console.log('Form Data :',eventname,eventhost,eventdate,eventdata);
    const CookiesStore = cookies();
    const supabase = createServerActionClient({cookies: () =>CookiesStore});

    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;
    if(!user){
        console.log('user is not authenticated for adding events');
        return ;
    }
    const {data,error} = await supabase
        .from('mits_event')
        .insert([
            {
                event_name: eventname,
                event_host: eventhost,
                event_date: eventdate,
                event_desc: eventdata,
                user_id: user.id,
                event_venue: eventvenue
            }
        ])
        if(error){
            console.error('Error uploading data',error);
            return;
        }
        revalidatePath('/dashboard');
        return {message : "event added successfully"}
}
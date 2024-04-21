'use client'
import supabase from "@/utils/supabase/voltron"
import { useState,useEffect } from "react"
export default function EventDetails() {
    const [events,setEvents] = useState([]);
    useEffect(()=>{
       async function checkSession(){
        if(!supabase.auth.user()) return 
        console.log('No user')
    }
        async function fetchEvents(){
            
            const { data, error } = await supabase
            .from('mits_events')
            .select('*')
            setEvents(data)
            if(error) throw error
            console.log('Events :',data)
        }
        fetchEvents()
        checkSession();
    },[])

    return(
        <div className="w-full h-full flex items-center justify-center border-2 border-purple-600">
           <div className="border-1 bg-red-100 text-black rounded-lg p-4">
                <h1>Event Details</h1>
                <div className="w-full h-full flex items-center justify-center">
                    <ul>
                        {events.map((event) => (
                            <li key={event.id} className="p-2">
                                <div className="flex items-center justify-between">
                                    <p>{event.event_title}</p>
                                    <p>{event.event_date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
           </div>
        </div>
    )

}
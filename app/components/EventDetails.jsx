'use client'
import { useState,useEffect } from "react";
import fetchEvent from "../server-actions/fetchEvents";
import deleteEvent from "../server-actions/eventActions";
export default function EventDetails() {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        fetchEvent().then((data) => {
            setEvents(data);
        });
    },[]);
    

    return(
        <div className="w-full h-full z-10 flex items-center justify-center">
           <div className="w-full h-full text-black rounded-lg ">
                <h1 className="font-bold text-white text-3xl">Event Details</h1>
                <div className="w-full h-full flex items-start justify">
                    <ul className="p-4  flex flex-wrap gap-2 border-3 ">
                        {events.map((links) => (
                            <li key={links.id} className="bg-inherit overflow-hidden relative w-[300px] border-2 border-purple-600 rounded-md text-white ">
                                <div className="flex-col flex p-2 items-center justify-center ">
                                    <p>{links.event_name}</p>
                                    <p>{links.event_date}</p>
                                </div>
                                <div className="text-center p-2">
                                    <p>{links.event_desc}</p>
                                </div>
                               <div className="flex gap-2 items-center flex-auto">
                                    <button className="flex py-2 hover:bg-green-300 hover:text-black text-white flex-1 justify-center "
                                       
                                    >
                                        <p>Archive</p>
                                    </button>
                                
                                    <button className="flex py-2 text-white hover:bg-purple-500 flex-1 justify-center "
                                         onClick={() => deleteEvent({links})}
                                    >
                                        <p>Delete</p>
                                    </button>
                                
                               </div>
                            </li>
                        ))}
                    </ul>
                </div>
           </div>
        </div>
    )

}
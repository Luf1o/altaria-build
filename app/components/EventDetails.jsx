'use client'
import { useState,useEffect } from "react";
import fetchEvent from "../server-actions/fetchEvents";

export default function EventDetails() {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        fetchEvent().then((data) => {
            setEvents(data);
        });
    },[]);
    

    return(
        <div className="w-full h-full flex items-center justify-center">
           <div className="border-1  text-black rounded-lg p-4">
                <h1 className="">Event Details</h1>
                <div className="w-full h-full flex items-center justify-center">
                    <ul className="p-4 border-3 border-purple-400">
                        {events.map((event) => (
                            <li key={event.id} className="bg-red-900 rounded-md p-2">
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
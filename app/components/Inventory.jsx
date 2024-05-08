'use client'
import { useState,useEffect } from "react";
import { getInventory } from "../server-actions/fetchEvents";

export default function Inventory(){
    const [ loading, setLoading ] = useState(true);
    const [ inventory, setInventory ] = useState([]);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
            const fetchedInventory = getInventory();
            setInventory(fetchedInventory)
        
    },3000);
    return () => clearTimeout(timer);
    },[])

    //return loading? <div>Inventory is loading...</div> : <div className="w-full flex  border-2">Inventory</div>
    return <div className="w-full p-4 flex h-full ">
        <div className="h-full">
            <div className="py-4 mb-6">
                <h1 className="font-bold text-3xl">Inventory</h1>
            </div>
            <div>
                <ul>
                    {inventory.map((inv)=>(
                        <li key={inv.id}>
                            <div className="py-3 px-3 w-96 flex flex-col gap-2 border-2 border-slate-400 rounded-lg">
                                <h1>{inv.eq_name}</h1>
                                <p>{inv.eq_code}</p>
                                <div className="flex justify-between">
                                    <p>{inv.event_assigned}</p>
                                    <div className="flex gap-2 items-center">
                                        <p>Status</p>
                                        <div className="w-8 h-8 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}
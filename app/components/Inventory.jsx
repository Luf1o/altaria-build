'use client'
import { useState,useEffect } from "react";
import { getInventory } from "../server-actions/fetchEvents";

export default function Inventory(){
    const [ loading, setLoading ] = useState(true);
    const [ inventory, setInventory ] = useState([]);
    useEffect(() => {
        getInventory().then((data) => {
            setInventory(data);
            console.log('Inventory from page',inventory);
        });

        
    }, []);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        
    },1500);   
    return () => clearTimeout(timer);
    },[])

    return loading? 
    <div className="w-full h-full flex items-center justified-center">
        <h1 className="font-semibold text-4xl">Inventory Loading...</h1>
    </div> 
        : 
    <div className="w-full p-4 flex h-full ">
        <div className="h-full w-full">
            <div className="py-4 mb-6 w-full items-center justify-between flex">
                <h1 className="font-bold text-3xl">Inventory</h1>
                <div className="flex  text-lg gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-400"></div>
                        <p className='text-red-400'>Not Available</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                        <p className='text-green-400'>Available</p>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap gap-2">
                    {inventory.map((inv)=>(
                        <li key={inv.id}>
                            <div className={`${inv.avail ? 'border-green-500' : 'border-red-500'} py-3 px-3 w-96 flex flex-col gap-2 border-2 rounded-lg`}>
                                <h1>{inv.eq_name}</h1>
                                <p>{inv.eq_code}</p>
                                <div className="flex justify-between">
                                    <p>{inv.event_assigned}</p>
                                    <div className="flex gap-2 items-center">
                                        <p>Status</p>
                                        <div className={`${inv.avail? 'bg-green-500' : 'bg-red-500'} w-8 h-8 rounded-full  `}></div>
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
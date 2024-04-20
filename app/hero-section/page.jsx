'use client'
import React,{ useState } from "react";

export default function HeroSection(){
    const [searchParams,setSearchParams] = useState('');
    const handleChanges = (e) => { 
        e.preventDefault();
        setSearchParams(e.target.value)

    }
    function searchQuery(element){
        element.preventDefault();
        console.log('Search for -'+searchParams)
        
    }
    
    return(
        <div className="w-full flex h-screen overflow-auto">
            <div className="h-24 w-full flex items-center justify-center">
                <form className="flex w-full justify-center  h-16 gap-3 py-2" onSubmit={searchQuery}>
                    <div className="w-1/2 flex items-center gap-3 justify-center">
                        <input type='text' value={searchParams} className="w-1/2 px-2 py-3 rounded-full text-black/80 font-semibold" placeholder="Search" onChange={handleChanges} />
                        <button type='submit' className="font-bold bg-white rounded-full text-black px-8 py-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
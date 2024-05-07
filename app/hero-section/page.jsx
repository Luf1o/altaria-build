'use client'
import React,{ useState,useEffect } from "react";
import EventDetails from "../components/EventDetails";

export default function HeroSection(activeTab,hideHeroSection){
    const [searchParams,setSearchParams] = useState('');
    const handleChanges = (e) => { 
        e.preventDefault();
        setSearchParams(e.target.value)

    }
    function searchQuery(element){
        element.preventDefault();
        console.log('Search for -'+searchParams)
        
    }

    //const [selectedTab,setSelectedTab] = useState('profile');
    const SetHeroSection = ({switchHero}) =>{
        useEffect(()=>{
            console.log('heroSection Switch Hero :',switchHero.activeTab)
        },[switchHero])
        switch(switchHero.activeTab){
            case 'home' || 'Home':
                return(
                    <div >
                       <h1>Home Section</h1>
                    </div>
                )
                case 'users' || 'Users':
                    return(
                        <div>
                            Users Section
                        </div>
                    )
                case 'events' || 'Events':
                    return(
                        <div className="w-full h-full">
                            <EventDetails />
                        </div>
                    )
                case 'profile' || 'Profile':   
                    return(
                        <div>
                            Profile Section
                        </div>
                    )
                case 'inventory' || 'Inventory':
                    return(
                        <div>
                            Inventory Section
                        </div>
                    )
            default: 
                return(
                    
                    <div className="flex flex-col text-center font-bold text-3xl">Welome to <br></br>MITS EVENT CURATOR Ver 0.4</div>
                )
        }
    }
    
    return(
        <div className="w-full flex flex-col h-screen overflow-auto">
            <div className="h-24 w-full flex items-center justify-center">
                <form className="flex w-full justify-center  h-16 gap-3 py-2" onSubmit={searchQuery}>
                    <div className="w-1/2 flex items-center gap-3 justify-center">
                        <input type='text' value={searchParams} className="w-1/2 px-2 py-3 rounded-full text-black/80 font-semibold" placeholder="Search" onChange={handleChanges} />
                        <button type='submit' className="font-bold bg-white rounded-full text-black px-8 py-3">Submit</button>
                    </div>
                </form>
            </div>
            <div className="w-full h-full   rounded-md border-0">
                <div className='p-1 w-full h-full flex items-center justify-center  '>
                   {hideHeroSection &&<SetHeroSection switchHero={activeTab} />}
                </div>
            </div>
        </div>
    )
}
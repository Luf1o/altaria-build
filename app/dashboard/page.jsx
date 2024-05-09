//import NavigationTab from "../components/NavigationTab";
'use client'
import HeroSection from "../hero-section/page";
import { Navlinks } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import addEvent from "../server-actions/addEvent";
import { GetUser } from "../server-actions/getUser";

export default function Dashboard() {
  const [selectedTab, setActiveTab] = useState('Home');
  const [openEventCreate, setOpenEventCreate] = useState(false);
  const [user, setUser] = useState([]);
useEffect(()=>{

    GetUser().then((data) => {
      setUser({data});
      console.log('dashboard log' ,user)
    });
  },[])
  function EventHam(){
    setOpenEventCreate(!openEventCreate);
  }
  function NavigationPanel(){
    return(
      <div className="w-full flex flex-col justify-between h-full ">
      <div className="bg-[#151313] items-center justify-between px-2 flex py-2 w-full">
          <div className="gap-2">
              <p className="font-black text-sm">User</p>
              <p>Role</p>
          </div>
          <div className="flex items-center justify-between border-3 border-red-300/[.3]">
              <Image 
                  src='/user2.webp'
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt='profile-picture'
              />
          </div>
      </div>
      <div className="gap-2">
          <div className="w-full text-center flex justify-center bg-slate-900/80 mb-3 h-12 ">
            <button className={`${openEventCreate?'border-2':''} w-full  rounded-lg`} onClick={EventHam}>Add Event</button>
          </div>
          <div className="p-2 text-center w-full bg-[#4D3737]">Current Event</div>
          <div className="gap-2">
              <ul>
                  {Navlinks.map((link) => (
                      <li key={link.name} className="p-0">
                          <button 
                              className={`w-full py-5 min-h-12 ${selectedTab === link.name ? 'bg-[#151313]' : ''} text-white`}
                              onClick={() => {
                                setActiveTab(link.name)
                                console.log('Dashboard nav Tab :',link.name)
                              }}
                          >
                              {link.name}
                          </button>
                      </li>
                  ))}
             </ul>
          </div>
      </div>
      <div className="w-full h-48">
          <p className="text-transparent">Buffer</p>
      </div>
      <div className='w-full py-5  bg-black/80  flex items-center justify-center'>
        <h1 className="font-black">SignOut</h1>
      </div>
  </div>
    )
  }

  return (
    <div className="w-screen h-full flex-row flex items-start justify-start bg-[#191B19] text-white fixed
      tr
    ">
      <div className="w-1/6 h-full bg-[#16735C]/[.69]">
        <NavigationPanel />
      </div>
        <HeroSection activeTab={selectedTab} hideHeroSection={openEventCreate} />
      {openEventCreate &&
        <div className="absolute w-full h-full bg-black/50 z-40 focus-within:backdrop-saturate-50 ">
        <div className="w-full relative h-full items-center justify-center flex">
            <form action={addEvent} onSubmit={EventHam} className='p-2 max-w-screen-lg flex bg-black flex-col justify-center border-2 text-black rounded-xl border-green-500'>
              <div className=" flex items-center justify-center overflow-hidden rounded-lg bg-green-400">
                  <button type='button' onClick={EventHam} className="font-bold w-full  p-2 border-2">Close</button>
              </div>
             <div className="flex">
              <div className="p-2 flex w-[300px] text-white flex-col gap-2">
                  <label htmlFor='event-name'>Event Name</label>
                  <input type='text' id='event-name' name='event-name' className="text-black"/>
                </div>
                <div className="p-2 text-white flex w-[300px] flex-col gap-2">
                  <label htmlFor='event-host'>Host</label>
                  <input type='text' id='event-host' className="text-black" name='event-host' />
                </div>
             </div>
              
            <div className="flex">
              <div className="p-2 flex w-[300px] flex-col gap-2">
                <label htmlFor='event-venue' className="text-white">Event Venue</label>
                <input type='text' id='event-venue' name='event-venue' />
              </div>
              <div className="p-2 flex w-[300px] flex-col gap-2">
                <label htmlFor='event-date'>Host</label>
                <input type='date' id='event-date' name='event-date' />
              </div>
            </div>
              <div className="mt-2 p-2 items-center flex justify-center w-full ">
                <textarea placeholder="event decription" name='event-desc' rows="4" cols="65"></textarea>
              </div>
            <div className="flex w-full gap-3 p-3">
              <button type='submit' className="px-8 py-3 bg-white rounded-full font-semibold">Submit</button>
              <button type='reset' className="px-8 py-3 bg-white rounded-full font-semibold">Reset</button>
            </div>
            </form>
        </div>
      </div>
      }
    </div>
  );
}
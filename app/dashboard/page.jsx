//import NavigationTab from "../components/NavigationTab";
'use client'
import HeroSection from "../hero-section/page";
import { Navlinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [selectedTab, setActiveTab] = useState('Home');

  function NavigationPanel(){
    return(
      <div className="w-full flex flex-col h-full">
      <div className="bg-[#151313] items-center justify-between px-2 flex py-2 w-full">
          <div className="gap-2">
              <p className="font-black text-3xl">Username</p>
              <p>role</p>
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
          <div className="w-full h-12 "></div>
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
  </div>
    )
  }

  return (
    <div className="w-screen h-full flex-row flex items-start justify-start bg-[#191B19] text-white fixed">
      <div className="w-1/6 h-full bg-[#16735C]/[.69]">
        <NavigationPanel />
      </div>
        <HeroSection activeTab={selectedTab} />
    </div>
  );
}
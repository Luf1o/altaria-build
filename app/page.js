'use client'
import '../app/globals.css'
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center  bg-fill-alpha2">
      <div className="w-full flex flex-col justify-center items-center h-full p-2 ">
        <h1 className="text-4xl font-bold text-center text-white">Login into Site</h1>
        <Link href='/dashboard'> 
          <button className="px-10 py-1 h-12 bg-blue-500 rounded-xl">Login</button>
        </Link>
      </div>
    </div>
  );
}

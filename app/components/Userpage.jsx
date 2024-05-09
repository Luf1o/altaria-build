'use client'
import { useEffect } from "react"

export default function UserPage(){
    return(
    <div className="w-full h-full flex flex-col">
        <div>
            <h1 className="text-3xl font-bold">Users</h1>  
        </div>
        <div className="w-full">  
            <ul className="p-4 w-full">
                <li className=" py-2 border-3">
                    <div className="flex m-2 justify-evenly">
                        <p className="w-48">Username</p>
                        <p className="w-48">Role</p>
                        <p className="w-48">Access</p>
                        <p className="w-48"> changes</p>
                    </div>
                </li>
                <li className="p-1 flex items-center justify-start py-3 rounded-lg bg-slate-200/25 w-full">
                    <input type='checkbox' className="w-12 mr-[115px]" />
                    <div className="w-48 border-3 mr-36">Username</div>
                    <div className="w-28 ml-4 mr-56">Admin</div>
                    <div className="w-48 ml-8 mr-3">Acess</div>
                    <div className="w-48 flex gap-2 ml-36">
                        <button className="text-red-500 px-4 py-3 bg-slate-50 rounded-lg">Delete</button>
                        <button className="text-green-500 px-4 py-3 bg-slate-50 rounded-lg">Edit</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
)
}
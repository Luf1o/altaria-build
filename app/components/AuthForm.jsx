'use client'
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function AuthForm(){
    const supabase = createClient();
    async function handleLogin(formData){
        console.log('HEHE')
    }

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
    }
    return(
        <form className="w-1/3 h-1/3 bg-red-50 roudned-xl" method="post">
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className="w-1/2 h-1/2 bg-red-50 rounded-xl"/>
            <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className="w-1/2 h-1/2 bg-red-50 rounded-xl"/>
            <button type="submit" className="w-1/2 h-1/2 bg-red-50 rounded-xl">Submit</button>
        </form>
    )
    
}
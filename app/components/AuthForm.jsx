'use client'
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm(){
    const supabase = createClientComponentClient()

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
    }
    return(
        <div className="flex w-1/3 h-2/3 items-center justify-center flex-col gap-2">
            <form className="w-full h-auto flex flex-col items-center justify-center gap-3 roudned-xl " method="post" >
                <input type="email" name="email"  placeholder="Email" className="w-1/2 h-12  rounded-xl"/>
                <input type="password" name="password"  placeholder="Password" className="w-1/2  h-12 rounded-xl"/>
                <button type="submit" className="w-1/2 h-12 bg-red-50 rounded-xl">Submit</button>
            </form>
            <div>
                <p>OR</p>
            </div>
            <div className="w-full p-3 text-white border-2 border-green-300 rounded-xl">
                <Auth 
                    supabaseClient={supabase}
                    providers={''}
                    view="magic_link"
                    showLinks={false}
                    redirectTo="/https://localhost:3000/auth/callback"
                    appearance={{
                        theme: 'light',
                        button: {
                            className: 'bg-white-400 text-gray-900 hover:bg-gray-600'
                        },
                        input: {
                            className: 'bg-gray-700 border-gray-600 text-white'
                        }
                    }}
                />
            </div>
        </div>
    )
    
}
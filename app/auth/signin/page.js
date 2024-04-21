'use client'

export default  function SignIn(){
    
   

    return(
        <div className="w-1/2 py-4 rounded-lg bg-blue-400 flex items-center flex-col justify-center">
            <form action="/dashboard" onSubmit={SignIn} >
                <input type="text" placeholder="Email" className="p-2 m-2 rounded-md" />
                <input type="password" placeholder="Password" className="p-2 m-2 rounded-md" />
                <button className="p-2 m-2 bg-blue-500 rounded-lg">Sign In</button>
            </form>
            <button className="p-2 m-2 bg-blue-500 rounded-lg" onClick={retrieveData}>Retrieve DB</button>
        </div>
    )
}
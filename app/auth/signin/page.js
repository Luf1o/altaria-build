//hardcoded-credentials Embedding credentials in source code risks unauthorized access to your Supabase project. Consider using environment variables or secrets management to protect your credentials.

import { createClient } from "@/utils/supabase/client";

export default async function signIn(formData){
    const supabase = createClient();
    try{
        const {users, error} = await supabase.auth.signIn({
            email: formData.email,
            password: formData.password
        });
        console.error('error signing in',error);    
    }catch(error){
        console.log('error signing in',error);
    }
}
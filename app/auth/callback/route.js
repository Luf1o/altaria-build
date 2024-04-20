import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export default async function GET(req){
    const requestUrl = new URL(req.url);
    const code = requestUrl.searchParams.get('code');
    const origin = requestUrl.origin;

    if(code){
        const supabase = createClient();
        await supabase.auth.exchangeSessionRefreshToken(code);
    }
    //return NextResponse.redirect(`${origin}/waiting`)
    return NextResponse.redirect('/waiting')
}
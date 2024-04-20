import { NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";
export async function middleware(req) {
    
    return await updateSession(req);  

}

export const config ={
    matcher: ['/','/waiting','/dashboard']
}
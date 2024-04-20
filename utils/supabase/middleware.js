import { createServerClient,DEFAULT_COOKIE_OPTIONS as CookieDefault } from "@supabase/ssr";
import { NextResponse } from "next/server";
export async function updateSession(req){
    try{
        let response  = NextResponse.next({
            request: {
                headers: request.headers,
            }
        });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_KEY,{
            cookies :{
                get(name){
                    return req.cookies.get(name)?.value;
                },
                set(name,value,options){
                    req.cookies.set({
                        name,value,...options
                    });
                    response = NextResponse.next({
                        request: {
                            headers: req.headers,
                        }
                    });
                    response.cookies.set({
                        name,value,...options
                    })
                },
                remove(name,options){
                   request.cookies.set({
                    name,value:'',...options
                   });
                   response = NextResponse.next({
                    request: {
                        headers: req.headers
                    }
                   });
                     response.cookies.set({
                          name,value:'',...options
                     });
                }
            }
        }
    );
    await supabase.auth.getUser();
}catch(responseError){
    console.error('middleware response error ',responseError);
    return NextResponse.next({
        request: {
            headers: req.headers
        }
    })
}
return {supabase,response}
}
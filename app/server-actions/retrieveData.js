import {supabase} from "../../utils/supabase/voltron";

export default async function retrieveData(req, res) {
    try{
        const {data,error} = await supabase
        .from('mits_events')
        .select('event_name')
        console.log(data)   
        if(error)
            throw error
    }catch(error){ 
        console.error(error)
    }
}
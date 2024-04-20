import {supabase} from "../../utils/supabase/voltron";

export default async function retrieveData(req, res) {
    try{
        const {data,error} = await supabase
        .from('mits_events')
        .select('event_name')
    }catch(error){ 
        console.log(error)
    }

}
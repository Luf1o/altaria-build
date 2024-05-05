import { createClient } from "@/utils/supabase/client"; // adjust the path according to your project structure

export async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Error signing out:', error);
        return {
            status: 500,
            body: {
                message: "Error signing out",
            },
        };
    }

    return {
        status: 200,
        body: {
            message: "Successfully signed out",
        },
    };
}
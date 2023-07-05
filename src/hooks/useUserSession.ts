import { supabaseClient } from "../pages/api/auth";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useUserSession = () => {
    const [session, setSession] = useState<Session | null>(null);

    const fetchUserSession = async () => {
        const { data } = await supabaseClient.auth.getSession();

        console.log('fetchUserSession - data -', data);

        if (data) {
            setSession(data.session);
        }
    }

    useEffect(() => {
        fetchUserSession();
    }, []);

    return { session };
}
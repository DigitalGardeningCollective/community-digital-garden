import { Session } from "@supabase/supabase-js";
import { useUser } from "@/context/AuthContext";

export const useUpdateUserSession = () => {
    const { setSession } = useUser();

    const updateSession = (session: Session | null) => {
        setSession(session);
    }

    const deleteSession = () => {
        setSession(null);
    }

    return { updateSession, deleteSession };
}
import { User as AuthUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database  } from '../types/generated';
import { useEffect, useState } from "react";
import { Moderator } from '@/types/manual';

export const useFetchModerator = (authUser: AuthUser | null) => {
    const supabaseClient = useSupabaseClient<Database>();
    const [moderator, setModerator] = useState<Moderator | null>(null);

    useEffect(() => {
        const fetchModerator = async (id: string) => {
            console.log('fetchModerator - id -', id);

            const { data, error } = await supabaseClient
            .from('moderator')
            .select()
            .eq('id', id)
            .single();
            if (data) {
                console.log('fetchUser - data -', data);
                setModerator(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (authUser) {
            fetchModerator(authUser.id);
        }
    }, [supabaseClient, authUser]);

    return { moderator };
}
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database  } from '../types/generated';

export const useModeratorAPI = () => {
    const supabaseClient = useSupabaseClient<Database>();
    
    const fetchModerator = async (id: string) => {
        const { data, error } = await supabaseClient
        .from('moderator')
        .select()
        .eq('id', id)
        .single();
        if (data) {
            console.log('fetchModerator - data -', data);
            return data;
        }
        if (error) {
            throw Error(error.message);
        }
    }

    return { fetchModerator };
}
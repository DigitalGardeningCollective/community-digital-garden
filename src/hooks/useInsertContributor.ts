import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from '../types/generated';
import { Contributor } from '@/types/manual';

export const useInsertContributor = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertContributor = async (contributor: Contributor) => {
        const { data, error } = await supabaseClient
        .from('contributor')
        .insert({
            ...contributor,
            // Making Supabase set these values so we will know when the contributor
            // data should be updated, ex. the avatar
            created_at: undefined,
            updated_at: undefined
        })
        .select()
        .single();
        if (data) {
            console.log('insertContributor - data -', data);
            return data;
        }
        if (error) {
            console.log('insertContributor - error -', error);
        }
    }

    return { insertContributor };
}
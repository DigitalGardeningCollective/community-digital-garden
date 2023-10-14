import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useInsertLeadingContributor = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertLeadingContributor = async (pieceID: string, contributorID: string) => {
        const { data, error } = await supabaseClient
        .from('published_piece_contributor')
        .insert({ 
            published_piece_id: pieceID, 
            contributor_id: contributorID
         })
        .select()
        if (data) {
            console.log('insertLeadingContributor - data -', data);
        }
        if (error) {
            console.log('insertLeadingContributor - error -', error);
        }
    }

    return { insertLeadingContributor };
}
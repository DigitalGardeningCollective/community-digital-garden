import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useInsertLeadingContributors = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertLeadingContributorRow = async (pieceID: string, contributorID: string) => {
        // console.log('insertLeadingContributorsRow');
        const { data, error } = await supabaseClient
        .from('piece_leading_contributor')
        .insert({ 
            published_piece_id: pieceID, 
            contributor_id: contributorID
         })
        .select()
        if (data) {
            console.log('insertLeadingContributorRow - data -', data);
        }
        if (error) {
            console.log('insertLeadingContributorRow - error -', error);
        }
    }

    return { insertLeadingContributorRow };
}
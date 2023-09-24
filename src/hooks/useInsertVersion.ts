import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from '../types/generated';

export const useInsertVersion = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertVersion = async (pieceID: string, changeTitle: string | null, changeDiff: Json) => {
        const { data, error } = await supabaseClient
        .from('version')
        .insert({
            published_piece_id: pieceID,
            change_title: changeTitle,
            change_diff: changeDiff
        })
        .select()
        .single()
        if (data) {
            console.log('insertVersion - data -', data);
            return data;
        }
        if (error) {
            console.log('insertVersion - error -', error);
        }
    }

    return { insertVersion };
}
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Published_Piece } from "@/types/manual";

export const useInsertNewPiece = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertPiece = async (piece: any) => {
        console.log('insertPiece - piece -', piece);
        const { data, error } = await supabaseClient
        .from('published_piece')
        .insert(piece)
        .select()
        .single()
        if (data) {
            console.log('insertPiece - data -', data);
            return data;
        }
        if (error) {
            console.log('insertPiece - error -', error);
        }
    }

    return { insertPiece };
}
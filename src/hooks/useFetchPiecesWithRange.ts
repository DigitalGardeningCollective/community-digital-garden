import { Database } from "@/types/generated";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useFetchPiecesWithRange = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const fetchPiecesWithRange = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('published_piece_view')
        .select()
        .range(from, to);
        if (data) {
            console.log('fetchPiecesWithRange - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchPiecesWithRange - error -', error);
        }
    }

    return { fetchPiecesWithRange };
}
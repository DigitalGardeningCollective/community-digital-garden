import { Database } from "@/types/generated";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export const usePieceAPI = (pieceTypeID: number) => {
    const supabaseClient = useSupabaseClient<Database>();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchPiecesCount = async (typeID: number) => {
            const { data, error } = await supabaseClient
            .from('total_published_pieces')
            .select()
            .single();
            if (data) {
                console.log('fetchPiecesCount - data -', data);
                setCount(data.value);
            }
            if (error) {
                console.log('fetchPiecesCount - error -', error);
            }
        }

        fetchPiecesCount(pieceTypeID);
    }, [supabaseClient, pieceTypeID]);

    const fetchPiecesWithinRange = async (from: number, to: number) => {
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

    return { fetchPiecesWithinRange, count };
}
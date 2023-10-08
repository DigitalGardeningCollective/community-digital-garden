import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import {Published_Piece_View} from "../types/manual";

export const useFetchPieces = () => {
    const [pieces, setPieces] = useState<Published_Piece_View[] | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchPieces = async () => {
            const { data, error } = await supabaseClient
                .from('published_piece_view')
                .select();
            if (data) {
                console.log('fetchPieces - data -', data);
                setPieces(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        fetchPieces();
    }, [supabaseClient]);

    return { pieces };
}
import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Published_Piece_View } from "@/types/manual";

export const useFetchPiece = (slug: string | undefined) => {
    const [pieceView, setPieceView] = useState<any | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchPieceView = async (id: string) => {
            const { data, error } = await supabaseClient
            .from('published_piece_view')
            .select('*, published_piece_contributor(*, contributor(*)))')
            .eq('id', id)
            .eq('published_piece_contributor.contributor_type_id', 1)
            .single();
            if (data) {
                // console.log('fetchSubmission - data -', data);
                setPieceView(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (slug) {
            const regMatch = slug.match(/^([a-z-]+)-([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$)$/); 

            if (regMatch) {
                fetchPieceView(regMatch[2]);
            }
        }
    }, [slug, supabaseClient]);

    return { pieceView };
}
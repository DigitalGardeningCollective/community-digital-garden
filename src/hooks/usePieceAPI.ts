import { Database } from "@/types/generated";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export const usePieceAPI = (typeTitle: string) => {
    const supabaseClient = useSupabaseClient<Database>();
    const [count, setCount] = useState<number | undefined>(undefined);

    useEffect(() => {
        const fetchPiecesCount = async (type: string) => {
            const { data, error } = await supabaseClient
            .from('total_count')
            .select()
            .eq("title", type)
            .single();
            if (data) {
                console.log('fetchPiecesCount - data -', data);
                setCount(data.value);
            }
            if (error) {
                console.log('fetchPiecesCount - error -', error);
            }
        }

        fetchPiecesCount(typeTitle);
    }, [supabaseClient, typeTitle]);

    const fetchEssaysWithinRange = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('published_piece_view')
        .select('*, published_piece_contributor(*, contributor(*))))')
        .eq('type', "Essay")
        .eq('published_piece_contributor.contributor_type_id', 1)
        .range(from, to);
        if (data) {
            console.log('fetchEssaysWithinRange - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchEssaysWithinRange - error -', error);
        }
    }

    const fetchNotesWithinRange = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('published_piece_view')
        .select('*, published_piece_contributor(*, contributor(*))))')
        .eq("type", "Note")
        .eq('published_piece_contributor.contributor_type_id', 1)
        .range(from, to);
        if (data) {
            console.log('fetchNotesWithinRange - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchNotesWithinRange - error -', error);
        }
    }

    return { fetchEssaysWithinRange, count, fetchNotesWithinRange };
}
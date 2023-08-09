import { useEffect, useState } from "react";
import { Piece } from '@/types/manual';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchEssays = () => {
    const [pieces, setPieces] = useState<Piece[] | null>(null)
    const supabaseClient = useSupabaseClient<Database>();
    
    const fetchEssays = async () => {
        const { data, error } = await supabaseClient
            .from('published_piece')
            .select()
        if(data) setPieces(data)
        if(error) console.error('error -', error)
    }
    
    useEffect(() => { fetchEssays() }, []);

    return { pieces };
}
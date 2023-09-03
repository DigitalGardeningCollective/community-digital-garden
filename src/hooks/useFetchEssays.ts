import { useEffect, useState } from "react";
import { Piece } from '@/types/manual';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchEssays = () => {
    const [essays, setEssays] = useState<Piece[]>([])
    const supabaseClient = useSupabaseClient<Database>();
    
    const fetchEssays = async () => {
        const { data, error } = await supabaseClient
            .from('published_piece_view')
            .select('*')
            .eq('type', 'Essay')
        if(data) 
            console.log(data),
            setEssays(data)
        if(error) console.error('error -', error)
    }
    
    useEffect(() => { fetchEssays() }, []);

    return { essays };
}
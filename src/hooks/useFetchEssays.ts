import { useEffect, useState } from "react";
import { Published_Piece_View } from '@/types/manual';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchEssays = () => {
    const [essays, setEssays] = useState<Published_Piece_View[]>([])
    const supabaseClient = useSupabaseClient<Database>();
    
    useEffect(() => { 
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

        fetchEssays(); 
    }, [supabaseClient]);

    return { essays };
}
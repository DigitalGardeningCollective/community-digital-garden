import { useEffect, useState } from "react";
import { Submission } from "@/types/manual";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchSubmissions = () => {
    const [submissions, setSubmissions] = useState<Submission[] | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    const fetchSubmissions = async () => {
        const { data, error } = await supabaseClient
        .from('submission')
        .select();
        if (data) {
            console.log('fetchSubmissions - data -', data);
            setSubmissions(data);
        }
        if (error) {
            console.log('error -', error);
        }
    }

    useEffect(() => {
        fetchSubmissions();
    }, []);

    return { submissions };
}
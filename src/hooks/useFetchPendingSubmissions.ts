import { useEffect, useState } from "react";
import { Submission } from "@/types/manual";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchPendingSubmissions = () => {
    const [submissions, setSubmissions] = useState<Submission[] | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchPendingSubmissions = async () => {
            const { data, error } = await supabaseClient
            .from('submission')
            .select()
            .eq('submission_status_id', 1);
            if (data) {
                console.log('fetchPendingSubmissions - data -', data);
                setSubmissions(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        fetchPendingSubmissions();
    }, [supabaseClient]);

    return { submissions };
}
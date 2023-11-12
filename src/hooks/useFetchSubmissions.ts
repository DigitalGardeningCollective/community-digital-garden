import { useEffect, useState } from "react";
import { Submission } from "@/types/manual";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchSubmissions = (statusID: number) => {
    const [submissions, setSubmissions] = useState<Submission[] | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchSubmissions = async (status: number) => {
            const { data, error } = await supabaseClient
            .from('submission')
            .select()
            .eq('submission_status_id', status);
            if (data) {
                console.log('fetchSubmissions - data -', data);
                setSubmissions(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        fetchSubmissions(statusID);
    }, [supabaseClient, statusID]);

    return { submissions };
}
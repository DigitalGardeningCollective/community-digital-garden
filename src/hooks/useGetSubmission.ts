import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Submission } from "@/types/manual";

export const useGetSubmission = (id: string | undefined) => {
    const [submission, setSubmission] = useState<Submission | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchSubmission = async (id: number) => {
            const { data, error } = await supabaseClient
            .from('submission')
            .select()
            .eq('id', id);
            if (data) {
                // console.log('fetchSubmission - data -', data);
                setSubmission(data[0]);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (id) {
            fetchSubmission(parseInt(id));
        }
    }, [id, supabaseClient]);

    return { submission };
}
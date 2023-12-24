import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Submission_View } from "@/types/manual";

export const useFetchAllSubmissions = () => {
    const [submissions, setSubmissions] = useState<Submission_View[] | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchAllSubmissions = async () => {
            const { data, error } = await supabaseClient
                .from('submission_viewing')
                .select();

            if (data) {
                console.log('fetchAllSubmissions - data -', data);
                setSubmissions(data);
            }

            if (error) {
                console.log('error -', error);
            }
        };

        fetchAllSubmissions();
    }, [supabaseClient]);

    return { submissions };
};



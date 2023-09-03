import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Submission_View } from "@/types/manual";

export const useFetchSubmission = (id: string | undefined) => {
    const [submissionView, setSubmissionView] = useState<Submission_View | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchSubmissionView = async (id: number) => {
            const { data, error } = await supabaseClient
            .from('submission_view')
            .select()
            .eq('id', id)
            .single();
            if (data) {
                // console.log('fetchSubmission - data -', data);
                setSubmissionView(data);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (id) {
            fetchSubmissionView(parseInt(id));
        }
    }, [id, supabaseClient]);

    return { submissionView };
}
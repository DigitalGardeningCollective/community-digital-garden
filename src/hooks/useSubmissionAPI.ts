import { Database } from "@/types/generated";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export const useSubmissionAPI = (status: number) => {
    const supabaseClient = useSupabaseClient<Database>();
    const [count, setCount] = useState<number | undefined>(undefined);

    useEffect(() => {
        const fetchCount = async (s: number) => {
            const { count, error } = await supabaseClient
            .from('submission')
            .select('*', { count: 'exact', head: true })
            .eq('submission_status_id', s);
            if (count != null) {
                console.log('fetchCount - count -', count);
                setCount(count);
            }
            if (error) {
                console.log('fetchCount - error -', error);
            }
        }

        fetchCount(status);
    }, [supabaseClient, status]);

    const fetchPendingSubmissions = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('submission')
        .select()
        .eq('submission_status_id', 1)
        .range(from, to);
        if (data) {
            console.log('fetchPendingSubmissions - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchPendingSubmissions - error -', error);
        }
    }

    const fetchApprovedSubmissions = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('submission')
        .select()
        .eq('submission_status_id', 2)
        .range(from, to);
        if (data) {
            console.log('fetchApprovedSubmissions - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchApprovedSubmissions - error -', error);
        }
    }

    const fetchRejectedSubmissions = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('submission')
        .select()
        .eq('submission_status_id', 3)
        .range(from, to);
        if (data) {
            console.log('fetchRejectedSubmissions - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchRejectedSubmissions - error -', error);
        }
    }

    

    return { 
        count, 
        fetchPendingSubmissions,
        fetchApprovedSubmissions,
        fetchRejectedSubmissions
    };
}
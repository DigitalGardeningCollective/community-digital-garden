import { Database } from "@/types/generated";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export const useContributorAPI = () => {
    const supabaseClient = useSupabaseClient<Database>();
    const [count, setCount] = useState<number | undefined>(undefined);

    useEffect(() => {
        const fetchCount = async () => {
            const { data, error } = await supabaseClient
            .from('total_count')
            .select()
            .eq("title", "Contributor")
            .single();
            if (data) {
                console.log('fetchCount - data -', data);
                setCount(data.value);
            }
            if (error) {
                console.log('fetchCount - error -', error);
            }
        }

        fetchCount();
    }, [supabaseClient]);

    const fetchContributorsWithinRange = async (from: number, to: number) => {
        const { data, error } = await supabaseClient
        .from('contributor')
        .select()
        .range(from, to);
        if (data) {
            console.log('fetchContributorsWithinRange - data -', data);
            return data;
        }
        if (error) {
            console.log('fetchContributorsWithinRange - error -', error);
        }
    }

    return { count, fetchContributorsWithinRange };
}
import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { Contributor } from "@/types/manual";

export const useFetchContributorForPiece = (slug: string | undefined) => {
    const [contributor, setContributor] = useState<Contributor | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchContributorForPiece = async (id: string) => {
            // console.log('fetchContributorForPiece - id -', id);
            const { data, error } = await supabaseClient
            .from('temp_piece_contributor')
            .select(`contributor (id, full_name, avatar_url, username, bio, created_at, updated_at)`)
            .eq('published_piece_id', id);
            if (data) {
                // console.log('fetchContributorForPiece - data -', data);
                setContributor(data[0].contributor);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (slug) {
            const regMatch = slug.match(/^([a-z-]+)-([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$)$/); 

            if (regMatch) {
                fetchContributorForPiece(regMatch[2]);
            }
        }
    }, [slug, supabaseClient]);

    return { contributor };
}
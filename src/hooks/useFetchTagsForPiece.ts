import { useEffect, useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useFetchTagsForPiece = (slug: string | undefined) => {
    const [tags, setTags] = useState<string[]>();
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const fetchTagsForPiece = async (id: string) => {
            const { data, error } = await supabaseClient
            .from('published_piece_tag')
            .select(`tag (id, title, created_at)`)
            .eq('published_piece_id', id);
            if (data) {
                let result: string[] = [];
                data.forEach(item => {
                    if (item.tag && item.tag.title) {
                        result.push(item.tag.title);
                    }
                });                
                setTags(result);
            }
            if (error) {
                console.log('error -', error);
            }
        }

        if (slug) {
            const regMatch = slug.match(/^([a-z-]+)-([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$)$/); 

            if (regMatch) {
                fetchTagsForPiece(regMatch[2]);
            }
        }
    }, [slug, supabaseClient]);

    return { tags };
}
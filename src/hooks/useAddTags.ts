import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from '../types/generated';
import { Tag } from '@/types/manual';

export const useAddTags = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const checkIfTagExists = async (tagTitle: string) => {
        const { data, error } = await supabaseClient
            .from('tag')
            .select()
            .eq('title', tagTitle);
            if (data) {
                console.log('checkIfTagExists - data -', data);
                if (data.length == 0) {
                    return { isExistingTag: false, tag: null };
                } else {
                    return { isExistingTag: true, tag: data[0] };
                }
            }
            if (error) {
                console.log('checkIfTagExists - error -', error);
                throw Error(error.message);
            }
    }

    const insertTag = async (tagTitle: string) => {
        const { data, error } = await supabaseClient
        .from('tag')
        .insert({
            title: tagTitle
        })
        .select()
        .single()
        if (data) {
            console.log('insertTag - data -', data);
            return data;
        }
        if (error) {
            console.log('insertTag - error -', error);
            throw Error(error.message);
        }
    }

    const insertPieceTagRelation = async (pieceID: string, tagID: number) => {
        const { data, error } = await supabaseClient
        .from('published_piece_tag')
        .insert({
            published_piece_id: pieceID,
            tag_id: tagID
        })
        .select()
        .single()
        if (data) {
            console.log('insertPieceTagRelation - data -', data);
            return data;
        }
        if (error) {
            console.log('insertPieceTagRelation - error -', error);
            throw Error(error.message);
        }
    }

    const addTagsToPiece = async (tags: string[], pieceID: string) => {

        tags.forEach(async (tagTitle) => {
            const result = await checkIfTagExists(tagTitle);
            
            if (result) {
                let tag: Tag | null | undefined = result.tag;
                const isExistingTag = result.isExistingTag;

                if (!isExistingTag) {
                    tag = await insertTag(tagTitle);
                }

                if (tag) {
                    await insertPieceTagRelation(pieceID, tag.id);
                }
            }
        });
    }

    return { addTagsToPiece };
}
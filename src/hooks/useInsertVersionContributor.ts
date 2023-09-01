import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from '../types/generated';

export const useInsertVersionContributor = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const insertVersionContributor = async (versionID: number, contributorID: string, contributorTypeID: number) => {
        const { data, error } = await supabaseClient
        .from('version_contributor')
        .insert({
            version_id: versionID,
            contributor_id: contributorID,
            contributor_type_id: contributorTypeID
        })
        .select()
        .single()
        if (data) {
            console.log('insertVersionContributor - data -', data);
            return data;
        }
        if (error) {
            console.log('insertVersionContributor - error -', error);
        }
    }

    return { insertVersionContributor };
}
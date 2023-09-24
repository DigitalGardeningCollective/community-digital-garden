import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from '../types/generated';
import { Contributor } from '@/types/manual';
import { v4 as uuidv4 } from 'uuid';

export const useInsertContributor = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const checkForUUID = async (uuid: string) => {
        const { data, error } = await supabaseClient
            .from('contributor')
            .select()
            .eq('id', uuid);

        if (data) {
            console.log('checkForUUID - data -', data);
            
            if (data.length == 0) {
                return true; // is available
            } else {
                return false;
            }
        }
        if (error) {
            console.log('checkForUUID - error -', error);
        }
    }

    const generateUUID = async () => {
        // generate a uuid
        let generatedUUID = null;
        let isUUIDAvailable: boolean | undefined = false;
        
        // see if the uuid can be found
        do {
            generatedUUID = uuidv4();
            isUUIDAvailable = await checkForUUID(generatedUUID);    
        } while (!isUUIDAvailable);

        // (continue to do the above if the uuid can be found)

        console.log('UUID is available');

        return generatedUUID;
    }

    const insertContributor = async (contributor: Contributor) => {
        const { data, error } = await supabaseClient
        .from('contributor')
        .insert({
            ...contributor,
            id: await generateUUID(),
            // Making Supabase set these values so we will know when the contributor
            // data should be updated, ex. the avatar
            created_at: undefined,
            updated_at: undefined
        })
        .select()
        .single();
        if (data) {
            console.log('insertContributor - data -', data);
            return data;
        }
        if (error) {
            console.log('insertContributor - error -', error);
        }
    }

    return { insertContributor };
}
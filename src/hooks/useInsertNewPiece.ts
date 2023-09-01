import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { v4 as uuidv4 } from 'uuid';

export const useInsertNewPiece = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const checkForUUID = async (uuid: string) => {
        const { data, error } = await supabaseClient
            .from('published_piece')
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

    const insertPiece = async (piece: any) => {
        const { data, error } = await supabaseClient
        .from('published_piece')
        .insert({
            ...piece, id: await generateUUID()
        })
        .select()
        .single()
        if (data) {
            console.log('insertPiece - data -', data);
            return data;
        }
        if (error) {
            console.log('insertPiece - error -', error);
        }
    }

    return { insertPiece };
}
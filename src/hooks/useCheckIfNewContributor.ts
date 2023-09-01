import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database  } from '../types/generated';
import { useEffect, useState } from 'react';
import { Submission_View } from '@/types/manual';
import { isChangeDetails } from '@/types/utilities';

export const useCheckIfNewContributor = (submissionView: Submission_View | null) => {
    const [isExistingContributor, setIsExistingContributor] = useState<boolean | null>(null);
    const supabaseClient = useSupabaseClient<Database>();

    useEffect(() => {
        const checkIfExistingContributor = async (uuid: string) => {
            console.log('checkIfExistingContributor - uuid -', uuid);

            const { data, error } = await supabaseClient
            .from('contributor')
            .select()
            .eq('id', uuid);
            if (data) {
                console.log('checkIfExistingContributor - data -', data);
                if (data.length == 0) {
                    setIsExistingContributor(false);
                } else {
                    setIsExistingContributor(true);
                }
            }
            if (error) {
                console.log('checkIfExistingContributor - error -', error);
                throw Error(error.message);
            }
        }

        if (submissionView && isChangeDetails(submissionView.change_details)) {
            checkIfExistingContributor(submissionView.change_details.contributor.id);
        }

    }, [supabaseClient, submissionView]);
    

    return { isExistingContributor };
}
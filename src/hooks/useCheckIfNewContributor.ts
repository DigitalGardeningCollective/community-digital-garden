import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database  } from '../types/generated';
import { useEffect, useState } from 'react';
import { Contributor, Submission_View } from '@/types/manual';
import { isChangeDetails } from '@/types/utilities';

interface Props {
    isExistingContributor: boolean;
    existingContributor: Contributor | null;
}

export const useCheckIfNewContributor = (submissionView: Submission_View | null) => {
    const [result, setResult] = useState<Props | null>(null);
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
                    setResult({
                        isExistingContributor: false,
                        existingContributor: null
                    });
                } else {
                    setResult({
                        isExistingContributor: true,
                        existingContributor: data[0]
                    });
                }
            }
            if (error) {
                console.log('checkIfExistingContributor - error -', error);
                throw Error(error.message);
            }
        }

        if (submissionView && isChangeDetails(submissionView.change_details)) {
            if (submissionView.change_details.contributor.id == null) {
                setResult({
                    isExistingContributor: false,
                    existingContributor: null
                });
            } else {
                checkIfExistingContributor(submissionView.change_details.contributor.id);
            }
        }

    }, [supabaseClient, submissionView]);
    

    return { 
        isExistingContributor: result?.isExistingContributor,
        existingContributor: result?.existingContributor

    };
}
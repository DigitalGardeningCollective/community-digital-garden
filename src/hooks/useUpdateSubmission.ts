import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';
import { useState } from 'react';

export const useUpdateSubmission = () => {
    const supabaseClient = useSupabaseClient<Database>();
    const [isLoading, setIsLoading] = useState(false);

    const markSubmissionAsAccepted = async (submissionID: number, contributorID: string) => {
        const { data, error } = await supabaseClient
        .from('submission')
        .update({
            submission_status_id: 2,
            updated_at: (new Date()).toISOString()
        })
        .eq('id', submissionID)
        .select()
        .single();
        if (data) {
            const { data: edgeFunctionData, error } = await supabaseClient.functions.invoke('sendApprovalOrRejection',
                { 
                    body: JSON.stringify({  
                        type: "Approve",
                        submissionID: data.source_id,
                        contributorID: contributorID,
                    })
                });
            if (edgeFunctionData) {
                console.log('edgeFunctionData -', edgeFunctionData);
            }
            if (error) {
                console.log('markSubmissionAsAccepted - error -', error);
                throw Error(error.message);
            }
        }
        if (error) {
            console.log('markSubmissionAsAccepted - error -', error);
            throw Error(error.message);
        } 
    }

    const markSubmissionAsRejected = async (moderatorID: string, submissionID: number, reason: string) => {
        setIsLoading(true);
        
        const { data, error } = await supabaseClient
        .from('submission')
        .update({
            submission_status_id: 3,
            rejection_reason: reason,
            decision_moderator_id: moderatorID,
            updated_at: (new Date()).toISOString(),
        })
        .eq('id', submissionID)
        .select()
        .single();

        if (data) {
            const { error } = await supabaseClient.functions.invoke('sendApprovalOrRejection',
                { 
                    body: JSON.stringify({  
                        type: "Reject",
                        submissionID: data.source_id,
                        reason: reason
                    })
                });
            if (error) {
                console.log('markSubmissionAsAccepted - error -', error);
                throw Error(error.message);
            }
        }

        if (error) {
            console.log('markSubmissionAsRejected - error -', error);
            throw Error(error.message);
        } 

        setIsLoading(false);
    }

    return { isLoading, markSubmissionAsAccepted, markSubmissionAsRejected };
}
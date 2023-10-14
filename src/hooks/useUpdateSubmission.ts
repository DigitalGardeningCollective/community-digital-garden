import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useUpdateSubmission = () => {
    const supabaseClient = useSupabaseClient<Database>();

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

    const markSubmissionAsRejected = async (submissionID: number, contributorID: string, reason: string) => {
        const { data, error } = await supabaseClient
        .from('submission')
        .update({
            submission_status_id: 3,
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
                        contributorID: contributorID,
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
    }

    return { markSubmissionAsAccepted, markSubmissionAsRejected };
}
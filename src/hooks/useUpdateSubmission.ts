import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

export const useUpdateSubmission = () => {
    const supabaseClient = useSupabaseClient<Database>();

    const markSubmissionAsAccepted = async (submissionID: number) => {
        const { error } = await supabaseClient
        .from('submission')
        .update({
            submission_status_id: 2
        })
        .eq('id', submissionID);
        if (error) {
            console.log('markSubmissionAsAccepted - error -', error);
            throw Error(error.message);
        } else {
            // TODO: Invoke the accept submission edge function
        }
    }

    const markSubmissionAsRejected = async (submissionID: number) => {
        const { error } = await supabaseClient
        .from('submission')
        .update({
            submission_status_id: 3
        })
        .eq('id', submissionID);
        if (error) {
            console.log('markSubmissionAsRejected - error -', error);
            throw Error(error.message);
        } else {
            // TODO: Invoke the reject submission edge function
        }
    }

    return { markSubmissionAsAccepted, markSubmissionAsRejected };
}
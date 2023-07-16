import { supabaseClient } from "../pages/api/auth";
import { useEffect, useState } from "react";

export const useFetchSubmissions = () => {
    const [submissions, setSubmissions] = useState<any[] | null>(null);

    const fetchSubmissions = async () => {
        const { data, error } = await supabaseClient
        .from('submission')
        .select();
        if (data) {
            console.log('fetchSubmissions - data -', data);
            setSubmissions(data);
        }
        if (error) {
            console.log('error -', error);
        }
    }

    const deleteSubmission = (givenSubmission: any): void => {
        if (givenSubmission) {
            setSubmissions(submissions?.filter((sub) => sub.id !== givenSubmission) ?? submissions)
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    return { deleteSubmission, submissions };
}
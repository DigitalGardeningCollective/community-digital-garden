import { useEffect, useState } from "react"
import { Contributor } from "@/types/manual"
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated'

export const useFetchContributors = () => {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const supabaseClient = useSupabaseClient<Database>()

    
    useEffect(() => {
        const fetchContributors = async () => {
            const { data, error } = await supabaseClient
                .from('contributor')
                .select()
            if (data) setContributors(data)
            if (error) throw Error(error.message)
        }
        fetchContributors()
    }, [supabaseClient])

    return { contributors }
}
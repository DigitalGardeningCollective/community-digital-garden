import { useEffect, useState } from "react";
import { Published_Piece_View } from "@/types/manual";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../types/generated';

  export const useFetchNotes = () => {
  const [notes, setNotes] = useState<Published_Piece_View[] | null>(null);
  const supabaseClient = useSupabaseClient<Database>();

   const fetchNotes = async () => {
    const { data, error } = await supabaseClient
      .from('published_piece_view')
      .select('*')
      .eq('type', 'Note')
    if (data) {
      console.log("fetchNotes - data -", data);
      setNotes(data);
    }
    if (error) {
      console.log("error -", error);
    }
    
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return { notes };
}

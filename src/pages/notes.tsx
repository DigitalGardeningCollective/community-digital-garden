import { PageHeader } from "@/components/PageHeader/PageHeader";
import React, { ReactElement } from "react";
import { Published_Piece_View } from "@/types/manual";
import { SupabaseClient } from "@supabase/supabase-js";

export default function Notes() {
  const fetchNotes = async () => {
    try {
      const { data, error } = await SupabaseClient.from(
        "publish_piece_view"
      ).select("*");
      if (error) {
        throw error;
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchNotes();

  return <PageHeader>{/* <PieceCard></PieceCard> */}</PageHeader>;

  //   Notes.getLayout = function getLayout(notes: ReactElement) {
  //     return <Layout>{notes}</Layout>;
  //   };
}

// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head } from "next/document";
import React, { ReactElement } from "react";
import { Layout } from "@/components/layouts/Layout";
import { supabaseClient } from "./api/auth";

export default function Notes() {
  return (
    <Html lang="en">
      <Head></Head>
    </Html>
  );

  //   Notes.getLayout = function getLayout(notes: ReactElement) {
  //     return <Layout>{notes}</Layout>;
  //   };
}

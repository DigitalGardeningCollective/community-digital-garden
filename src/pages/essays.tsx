import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { Button, Link } from '@chakra-ui/react';
// Add the page's header using the PageHeader component
// Add a simple Supabase query to only fetch essays from the "piece" table
// Show the fetched essays in a list (use the PieceCard component for each item)

const Essays: NextPageWithLayout = () => {
return (
    <>
    <Head>
        <title>Essays</title>
    </Head>
        <PageHeader title="Essays" subtitle="A collection of atomic notes, i.e. a single idea or a single object of attention." />
    </>
)
}

export default Essays;
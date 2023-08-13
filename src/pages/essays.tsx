import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Container, Text, Stack } from '@chakra-ui/react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { useFetchEssays } from '@/hooks/useFetchEssays';
import { PieceCard } from '@/components/PieceCard/PieceCard';
import { useFetchContributorForPiece } from '@/hooks/useFetchContributorForPiece';
import { useRouter } from 'next/router';
import { Published_Piece_View } from '../types/manual';
// Add the page's header using the PageHeader component
// Show the fetched essays in a list (use the PieceCard component for each item)

const contributor = (essay: Published_Piece_View) => useFetchContributorForPiece(essay.id).contributor
const essay = (essay: Published_Piece_View) => <PieceCard piece={essay} contributor={contributor}/>

const Essays: NextPageWithLayout = () => {
    const router = useRouter();
    
    // Add a simple Supabase query to only fetch essays from the "piece" table
    console.log('router.query.slug -', router.query.slug)
    const { essays } = useFetchEssays();
    console.log('essayView -', essays);
   
    if (Array.isArray(router.query.slug)) {
        throw Error();
      }

    return (
    <>
    <Head>
        <title>Essays</title>
    </Head>
        <PageHeader title="Essays" subtitle="A collection of atomic notes, i.e. a single idea or a single object of attention." />
        <Stack>{essays && essays.map(essay)}</Stack>
    </>
)
}

export default Essays;
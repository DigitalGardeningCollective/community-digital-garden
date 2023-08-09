import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Container, Text } from '@chakra-ui/react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { useFetchEssays } from '@/hooks/useFetchEssays';
import { PieceCard } from '@/components/PieceCard/PieceCard';
import { useRouter } from 'next/router';
// Add the page's header using the PageHeader component
// Show the fetched essays in a list (use the PieceCard component for each item)

const Essays: NextPageWithLayout = () => {
    const router = useRouter();
    
    // Add a simple Supabase query to only fetch essays from the "piece" table
    console.log('router.query.slug -', router.query.slug)
    const { pieces } = useFetchEssays();
    console.log('essayView -', pieces);

    //const testPiece = { title: "test", author: "test", status: "Evergreen", img: null }
   
    if (Array.isArray(router.query.slug)) {
        throw Error();
      }

    return (
    <>
    <Head>
        <title>Essays</title>
    </Head>
        <PageHeader title="Essays" subtitle="A collection of atomic notes, i.e. a single idea or a single object of attention." />
        {
            pieces?.map(piece => (
                <PieceCard piece={piece}/>
            ))

        }
    </>
)
}

export default Essays;
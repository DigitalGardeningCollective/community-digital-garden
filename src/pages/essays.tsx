import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Container, Stack } from '@chakra-ui/react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { useFetchEssays } from '@/hooks/useFetchEssays';
import { PieceCard } from '@/components/PieceCard/PieceCard';
import { Published_Piece_View } from '../types/manual';
import { Layout } from '@/components/layouts/Layout';
import { Dataview } from '@/components/Dataview/Dataview';
// Add the page's header using the PageHeader component
// Show the fetched essays in a list (use the PieceCard component for each item)

const Essays: NextPageWithLayout = () => {
    const { essays } = useFetchEssays();

    return <>
        <Head>
            <title>Essays</title>
        </Head>
        <Container>
            <PageHeader title="Essays" subtitle="A collection of atomic notes, i.e. a single idea or a single object of attention." />
            <Dataview />
            {/* <Stack spacing={4}>{
                essays && essays.map((essay: Published_Piece_View, index: number) => 
                <PieceCard key={index} piece={essay} contributor={{
                    id: "1", 
                    avatar_url: "", 
                    bio: "I like coding", 
                    username: "TheeSamSmith01", 
                    full_name: "Sam Smith", 
                    created_at:"", 
                    updated_at:""
                }}/>)
            }</Stack> */}
        </Container>
    </>
}

Essays.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
}

export default Essays;
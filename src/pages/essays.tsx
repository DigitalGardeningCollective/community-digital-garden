import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Container, Stack } from '@chakra-ui/react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { PieceCard } from '@/components/PieceCard/PieceCard';
import { Published_Piece_View } from '../types/manual';
import { Layout } from '@/components/layouts/Layout';
import { Dataview, DataLayout} from '@/components/Dataview/Dataview';
import { usePieceAPI } from '@/hooks/usePieceAPI';
import { isPublishedPiece, pieceUniformDataRetrieval } from '@/types/utilities';
import { essays } from '@/components/Dataview/mockData';
import { PieceListItem } from '@/components/PieceListItem/PieceListItem';

const Essays: NextPageWithLayout = () => {
    const { count, fetchEssaysWithinRange } = usePieceAPI("Essay");

    const handleClick = (id: string | number) => {

    }

    return <>
        <Head>
            <title>Essays</title>
        </Head>
        <Container>
            <PageHeader title="Essays" subtitle="A collection of long-form narratives and opinion pieces." />
            <Dataview<Published_Piece_View>
                layout={ DataLayout.Grid }
                totalCount={count} 
                numberToShow={9}
                numberPerRow={3}
                handleOnClick={handleClick}
                query={fetchEssaysWithinRange}
                uniformDataRetrievalMethod={pieceUniformDataRetrieval}
                Component={PieceCard}
            />
        </Container>
    </>
}

Essays.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
}

export default Essays;
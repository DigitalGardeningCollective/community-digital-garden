import { ReactElement } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from './_app'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import PersonCard from '@/components/PersonCard/PersonCard'
import { Container, Stack } from '@chakra-ui/react'
import { Contributor } from '@/types/manual'
import { useContributorAPI } from '@/hooks/useContributorAPI'
import { UniformDataFormat } from '@/components/PieceCard/PieceCard'
import { DataLayout, Dataview } from '@/components/Dataview/Dataview'

const Contributors: NextPageWithLayout = () => {
    const { count, fetchContributorsWithinRange } = useContributorAPI();

    const uniformDataRetrieval = (data: Contributor): UniformDataFormat => {
        
        if (!data.id || !data.avatar_url || !data.full_name || !data.username || !data.bio) {
            throw Error("Data properties aren't valid");
        }

        return {
            id: data.id,
            imageURL: data.avatar_url,
            mainText: data.full_name,
            subText: data.username,
            extraText: data.bio
        };
    }

    const handleClick = (id: string | number) => {

    }

    return <>
        <Head>
            <title>Contributors</title>
            <meta name="description" content="A collection of contributors." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container>
            <PageHeader title="Contributors" subtitle="The wonderful individuals who have contributed their ideas to our digital garden." />
            <Dataview<Contributor>
                layout={DataLayout.Grid}
                totalCount={count} 
                numberToShow={8}
                numberPerRow={2}
                handleOnClick={handleClick}
                query={fetchContributorsWithinRange}
                uniformDataRetrievalMethod={uniformDataRetrieval}
                Component={PersonCard}
            />
        </Container>
    </>
}

Contributors.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Contributors
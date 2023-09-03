import { Key, ReactElement } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from './_app'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { useFetchContributors } from '@/hooks/useFetchContributors'
import PersonCard from '@/components/PersonCard/PersonCard'
import { Container, Stack } from '@chakra-ui/react'
import { Contributor } from '@/types/manual'

const Contributors: NextPageWithLayout = () => {
    const  {contributors} = useFetchContributors()

    return <>
        <Head>
            <title>Contributors</title>
            <meta name="description" content="A collection of contributors." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container maxW="4x1" padding={0}>
            <PageHeader title="Contributors" subtitle="A collection of contributors." />
            <Stack spacing={4}>{ 
                contributors && contributors?.map((contributor, index) => 
                <PersonCard key={index} contributor={contributor}/>) 
            }</Stack>
        </Container>
    </>
}

Contributors.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Contributors
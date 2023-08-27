import { ReactElement } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from './_app'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { useFetchContributors } from '@/hooks/useFetchContributors'
import PersonCard from '@/components/PersonCard/PersonCard'
import { Stack } from '@chakra-ui/react'
import { Contributor } from '@/types/manual'

const contributor = (contributor: Contributor) => <PersonCard {...{contributor}}></PersonCard>

const Contributors: NextPageWithLayout = () => <Layout>
    <Head>
        <title>Contributors</title>
        <meta name="description" content="A collection of contributors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader title="Contributors" subtitle="A collection of contributors." />
    <Stack spacing={4}>{useFetchContributors().contributors.map(contributor)}</Stack>
</Layout>

export default Contributors
import { ReactElement, useState } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from '../_app';
import { ModeratorLayout } from '@/components/layouts/ModeratorLayout';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { isSubmission } from '@/types/utilities';
import { useRouter } from 'next/router';
import { DataLayout, Dataview } from '@/components/Dataview/Dataview';
import { Submission } from '@/types/manual';
import { SubmissionTableItem } from '@/components/SubmissionTableItem/SubmissionTableItem';
import { useSubmissionAPI } from '@/hooks/useSubmissionAPI';

const Submissions: NextPageWithLayout = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const router = useRouter();
    const { 
      count,
      fetchPendingSubmissions,
      fetchApprovedSubmissions,
      fetchRejectedSubmissions
    } = useSubmissionAPI(tabIndex + 1);

    let selectedQuery;

    if ((tabIndex + 1) == 1) {
      selectedQuery = fetchPendingSubmissions;
    } else if ((tabIndex + 1) == 2) {
      selectedQuery = fetchApprovedSubmissions;
    } else {
      selectedQuery = fetchRejectedSubmissions;
    }

    const handleClick = (id: number | string) => {
      router.push(`/submissions/${encodeURIComponent(id)}`);
    }

    const renderSubmissionTableItem = (data: Record<string, unknown>) => {
      if (isSubmission(data)) {
        return <SubmissionTableItem key={data.id} submission={data} func={handleClick} />
      } else {
        throw ("data is not a submission");
      }
    }

    return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs mb={5} variant='soft-rounded' onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'orange.500' }}>Pending</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.500' }}>Approved</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Rejected</Tab>
        </TabList>
      </Tabs>
      <Dataview<Submission>
          layout={DataLayout.Table}
          totalCount={count}
          numberToShow={9}          
          handleOnClick={handleClick}
          query={selectedQuery}
          tableHeaderNames={["TITLE", "AUTHOR", "SUBMITTED"]}
          renderComponent={renderSubmissionTableItem}
          dataName="Submission"
        />
    </>
  )
}

Submissions.getLayout = function getLayout(page: ReactElement) {
  return (
    <ModeratorLayout>
      {page}
    </ModeratorLayout>
  )
}

export default Submissions;

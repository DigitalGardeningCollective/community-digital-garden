import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Layout } from '@/components/layouts/Layout';
import { useMediaQuery } from '@chakra-ui/react';

const Landing: NextPageWithLayout = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

return (
    <>
    <p>Hello World</p>
    </>
)
}
Landing.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  
  export default Landing;

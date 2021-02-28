import Head from 'next/head';
import { getInitialLocale } from "../translations/getInitialLocale";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${getInitialLocale()}`);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>:(</div>
    </>
  );
};

export default Home;
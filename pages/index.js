import Head from 'next/head';
import Main from '../components/Main';
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>List of Countries</title>
        <meta name='description' content='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />
    </>
  );
}

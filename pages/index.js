import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beedol</title>
        <meta name="description" content="How to articles written by users, for users!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  )
}

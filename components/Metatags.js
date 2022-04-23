// Component for metatags

// Use twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
  title = 'Beedol App',
  description = 'Education related how to posts by students, for students!',
  image = '/card.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="beedol.app" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
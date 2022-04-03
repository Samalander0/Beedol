// Component for metatags

// Use twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
  title = 'Beedol App',
  description = 'Just a test for the Beedol App metatags!',
  image = 'https://unsplash.it/500',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@fireship_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
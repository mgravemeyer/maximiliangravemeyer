import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/styles.css';

function _app({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Maximilian Gravemeyer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Freelance Developer | Maximilian Gravemeyer"
        />
        <meta
          name="keywords"
          content="Gravemeyer, Freelancer, React, Next, Developer"
        />
        <meta name="author" content="Maximilian Gravemeyer" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default _app;

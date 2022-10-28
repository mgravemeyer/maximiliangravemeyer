import React from 'react';
import { AppProps } from 'next/app';

import '../styles/styles.css';

function _app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default _app;

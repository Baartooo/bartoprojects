import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProviders } from '../src/providers/AppProviders';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
      </Head>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default App;

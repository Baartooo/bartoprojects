import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProviders } from '@/providers/AppProviders';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>BartoProjects</title>
        <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
        <link rel={'icon'} type={'image/x-icon'} href={'/favicon.png'} />
      </Head>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default App;

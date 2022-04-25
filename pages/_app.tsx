import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Global } from '@mantine/core';

import { themeOverride } from '@/theme/theme';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOverride}>
        <Global
          styles={(theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },

            html: {
              padding: 0,
              margin: 0,
            },

            body: {
              ...theme.fn.fontStyles(),
              padding: 0,
              margin: 0,
              backgroundColor: theme.colors.dark[5],
              color: theme.white,
            },
          })}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default App;

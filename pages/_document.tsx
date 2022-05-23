import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';
const getInitialProps = createGetInitialProps();

class MyDocument extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html>
        <Head>
          <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
          <link rel={'preconnect'} href={'https://fonts.gstatic.com'} />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Nunito+Sans:ital,wght@0,900;1,900&display=swap'
            }
            rel={'stylesheet'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// eslint-disable-next-line import/no-default-export
export default MyDocument;

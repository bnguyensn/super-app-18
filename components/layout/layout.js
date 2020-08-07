import React from 'react';

import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Main from './main';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

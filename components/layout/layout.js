import React from 'react';

import Header from './header';
import Footer from './footer';
import Main from './main';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

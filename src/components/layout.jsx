import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/Layout.css';
import '../styles/Layout.styl';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

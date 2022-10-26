import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Checkout from './containers/checkout';
import Layout from './components/layout';
import NotFound from './containers/notFound';

function App() {
  return ( 
    <Layout>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/checkout" element={ <Checkout /> } />
        <Route element={ <NotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
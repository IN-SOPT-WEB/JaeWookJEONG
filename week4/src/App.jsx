import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
};

export default App;

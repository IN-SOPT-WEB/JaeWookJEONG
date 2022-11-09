import React from 'react';
import Content from './Content';
import Header from './Header';
import Layout from './Layout';

const Main = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
};

export default Main;

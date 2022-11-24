import React from 'react';
import { Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" align="center" justify="center">
      {children}
    </Flex>
  );
};

export default Layout;

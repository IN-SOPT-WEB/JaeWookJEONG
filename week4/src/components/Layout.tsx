import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface MyComponentProps {
  children: ReactNode;
}

const Layout = ({ children }: MyComponentProps) => {
  return (
    <Flex flexDirection="column" align="center" justify="center">
      {children}
    </Flex>
  );
};

export default Layout;

import { ReactNode } from 'react';
import styled from 'styled-components';

interface MyChildrenProps {
  children: ReactNode;
}

const Layout = ({ children }: MyChildrenProps) => {
  return <Styled.Root>{children}</Styled.Root>;
};

export default Layout;

const Styled = {
  Root: styled.div`
    width: 1440px;
    padding: 0 1rem;
    margin: 0 auto;
  `,
};

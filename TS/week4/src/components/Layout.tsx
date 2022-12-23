import { ReactNode } from "react";
import styled from "styled-components";

type MyComponentsProps = {
  children: ReactNode;
};

const Layout = ({ children }: MyComponentsProps) => {
  return <Styled.Root>{children}</Styled.Root>;
};

export default Layout;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};

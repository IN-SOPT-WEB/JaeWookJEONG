import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const App = () => {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

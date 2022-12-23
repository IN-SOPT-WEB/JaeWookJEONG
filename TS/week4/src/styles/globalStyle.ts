import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        min-height: 100%;
    }

    * {
        box-sizing: border-box;
    }

    #root {
        min-height: 100%;
    }
    
    html {
        height: 100%;
    }
`;

export default GlobalStyle;

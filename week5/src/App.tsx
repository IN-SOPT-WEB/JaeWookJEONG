import { ThemeProvider } from 'styled-components';
import Router from './lib/Router';
import GlobalStyles from './styles/globalStyle';
import theme from './styles/theme';
const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
};

export default App;

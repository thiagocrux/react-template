import { ThemeProvider } from 'styled-components';

import { GlobalStyles, defaultTheme } from '@/assets/styles';
import { Wrapper } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Wrapper>
        <p>Start your project here</p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import appInstance from './i18n';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

export const App = () => (
  <I18nextProvider i18n={appInstance}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  </I18nextProvider>
);

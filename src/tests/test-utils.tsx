import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import appInstance from '../i18n';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const render = (ui: ReactElement, renderOptions?: Omit<RenderOptions, 'queries'>) => {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <MemoryRouter>
      <I18nextProvider i18n={appInstance}>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </I18nextProvider>
    </MemoryRouter>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };

import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

MyApp.propTypes = AppProps;

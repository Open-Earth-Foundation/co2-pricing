
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"

import studioTheme from '../ui-components/studioTheme';
import type { NextPageWithLayout } from 'types/ui';
import "styles/globals.sass";

import Head from 'next/head';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 60 * 60 * 1000,
      retryDelay: 30 * 1000,
    },
  },
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={studioTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;

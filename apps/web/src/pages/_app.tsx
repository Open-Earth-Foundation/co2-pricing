import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect } from "react";

import studioTheme from "../ui-components/studioTheme";
import type { NextPageWithLayout } from "types/ui";
import "styles/globals.sass";
import "styles/styling.css";

import Head from "next/head";

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = "https://matomo.openearth.foundation/";
const MATOMO_SITE_ID = "2";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 60 * 60 * 1000,
      retryDelay: 30 * 1000,
    },
  },
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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

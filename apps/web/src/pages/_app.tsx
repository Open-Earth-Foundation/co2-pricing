
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css"

import type { NextPageWithLayout } from 'types/ui';
import "styles/globals.sass";

import awsExports from '../aws-exports';


Amplify.configure(awsExports);

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
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;

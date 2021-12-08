import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import 'focus-visible/dist/focus-visible';

import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider >
    </SessionProvider>
  )
}

export default MyApp

import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/layout/layout";
import client from "../client";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

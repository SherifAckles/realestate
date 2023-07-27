import React from "react";
import Head from "next/head";
import { GlobalContextProvider } from "../components/context/GlobalContext";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Head>
        <title>real estate 1</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      </GlobalContextProvider>
  );
}

export default MyApp;

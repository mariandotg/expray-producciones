import App from "next/app";
import type { AppProps } from "next/app";
import { createContext } from "react";
import Head from "next/head";
import { fetchAPI } from "../lib/api";
import { MyGlobalContext } from "../types";
import { getStrapiMedia } from "../lib/media";
import "./_app.css";

export const GlobalContext = createContext<MyGlobalContext>({} as MyGlobalContext);

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default MyApp;

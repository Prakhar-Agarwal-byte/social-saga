import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Head from "next/head";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Social Saga</title>
      </Head>
      <Component {...pageProps} />
      <Nav />
    </>
  );
}

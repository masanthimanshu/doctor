import "../styles/global.css";

import Head from "next/head";
import { Header, Footer } from "../../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Energy Tokens</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

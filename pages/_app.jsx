import "../assets/style.css";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

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

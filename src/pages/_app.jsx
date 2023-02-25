import "../styles/global.css";

import Head from "next/head";
import { Theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { Header, Footer } from "../../components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Doctor</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

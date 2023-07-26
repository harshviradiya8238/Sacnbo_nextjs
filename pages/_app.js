import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import RTL from "../src/theme/RTL";
import ThemeSettings from "../src/theme/ThemeSettings";
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import BlankLayout from "../src/layouts/BlankLayout";
import "../styles/style.scss";
// import "../styles/global.scss";
import "../data";
import { NotificationContainer } from "react-notifications";

import wrapper from "../src/store/Store";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Blank: BlankLayout,
};

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Gettheme = ThemeSettings();
  const customizer = useSelector((state) => state.CustomizerReducer);
  const Layout = layouts[Component.layout] || FullLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Dequity | Scanbo</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Gettheme}>
        <RTL direction={customizer.activeDir}>
          <CssBaseline />
          <div style={{ background: "#E5EDF5" }}>
            <Layout>
              <NotificationContainer />
              <Component {...pageProps} />
            </Layout>
          </div>
        </RTL>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);

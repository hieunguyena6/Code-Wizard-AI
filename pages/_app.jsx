/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState, createContext } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ConfigProvider, theme } from "antd";
import "@uiw/react-textarea-code-editor/dist.css";
import "antd/dist/reset.css";
import "../styles/globals.css";
import "../styles/main.scss";
import AppLayout from "app/components/layout";

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line global-require
      const axe = require("react-axe");
      axe(React, ReactDOM, 1000);
    }

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Code Wizard AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
          <ThemeContext.Provider
            value={{
              darkTheme,
              setDarkTheme,
            }}
          >
            <ConfigProvider
              theme={{
                algorithm: darkTheme
                  ? theme.darkAlgorithm
                  : theme.defaultAlgorithm,
                hashed: false,
              }}
            >
              <NextNProgress />
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </ConfigProvider>
          </ThemeContext.Provider>
    </>
  );
}

export default MyApp;

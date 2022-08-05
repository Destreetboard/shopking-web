import "../styles/index.scss";
import "animate.css";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main-layout";
import Script from "next/script";
import * as React from "react";
import PreLoader from "../components/PreLoader/inde";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (window) {
      window.onload = () => {
        console.log("Loaded");
        setIsLoading(false);
      };
    }
  }, []);

  return (
    <>
      <MainLayout>
        <>
          {isLoading && <PreLoader />}
          <Component {...pageProps} />
        </>
      </MainLayout>

      <Script
        id="wow-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        onLoad={(e) => {
          // @ts-ignore
          new window.WOW().init();
        }}
        onError={(e) => {
          console.log("An Error occurred", e);
        }}
      />
    </>
  );
}

export default MyApp;

import "../styles/index.scss";
import "animate.css";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main-layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      <Script
        id="wow-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        onLoad={(e) => {
          // @ts-ignore
          console.log("Loaded : ", new window.WOW().init());
        }}
        onError={(e) => {
          console.log("An Error occurred", e);
        }}
      />
    </>
  );
}

export default MyApp;

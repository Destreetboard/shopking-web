import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Destreetboard" />

        <title>
          Shopking Errand Service - Take Your Shopping Experience To The Next
          Level.
        </title>
        <meta
          name="title"
          content="Shopking Errand Service - Take Your Shopping Experience To The Next Level."
        />
        <meta
          name="description"
          content="With Shopking, you can be sure to focus on important things that matters to you while We do your shopping /errands. We bring luxury to you!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shopking.ng/" />
        <meta
          property="og:title"
          content="Shopking Errand Service - Take Your Shopping Experience To The Next Level."
        />
        <meta
          property="og:description"
          content="With Shopking, you can be sure to focus on important things that matters to you while We do your shopping /errands. We bring luxury to you!"
        />
        <meta property="og:image" content="/public/images/icon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shopking.ng/" />
        <meta
          property="twitter:title"
          content="Shopking Errand Service - Take Your Shopping Experience To The Next Level."
        />
        <meta
          property="twitter:description"
          content="With Shopking, you can be sure to focus on important things that matters to you while We do your shopping /errands. We bring luxury to you!"
        />
        <meta property="twitter:image" content="/public/images/icon.png" />

        <meta
          name="keywords"
          content="shopking, shopking.ng, shopping, shop king, destreetboard, shopping service, delivery, errand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />

        <main>
          <div>{props.children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

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
        <title>Shopking - Shopping Errand Services</title>
        <meta
          name="description"
          content="With Shopking, you can be sure to focus on important things that matters most while we do the shopping/errands for you."
        />
        <meta
          name="keywords"
          content="shopking, shopping, errands, shopping servies, delivery, best delivery services, shopking services, shopking.ng"
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

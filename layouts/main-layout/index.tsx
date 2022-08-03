import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
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

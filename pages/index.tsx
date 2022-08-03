import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as UI from "../components/ui";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>
          Shopking Errand Service - Take Your Shopping Experience To The Next
          Level.
        </title>
        <meta
          name="description"
          content="With Shopking, you can be sure to focus on important things that matters to you while We do your shopping /errands. We bring luxury to you!"
        />
        <meta
          name="keywords"
          content="shopking, shopking.ng, shopping, shop king, destreetboard, shopping service, delivery, errand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home__hero">
        <div className="container">
          <div className="row">
            <div className="col-6 home__hero-content">
              <h1 className="heading mb-2">
                Take Your Shopping Experience To The Next Level..
              </h1>
              <p className="sub-heading">
                With Shopking, you can be sure to focus on important things that
                matters to you while We do your shopping /errands. We bring
                luxury to you!
              </p>
            </div>
            <div className="col-6 text--right">
              <Image
                alt="Create Shopping List"
                src={require("/public/svgs/home-hero.svg")}
                className="home__hero-image"
              />
            </div>
          </div>
          <p className="mb-1 mt-3">Backed By</p>
          <div className="backed">
            <div>
              <Image
                alt="destreetboard logo"
                src={require("../public/images/backed/destreetboard.png")}
              />
            </div>
            <div>
              <Image
                alt="destreetboard logo"
                src={require("../public/images/backed/linktrex.png")}
              />
            </div>
            <div>
              <Image
                alt="destreetboard logo"
                src={require("../public/images/backed/rodicash.png")}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="home__features container">
        <div className="home__features-scroll mb-2">
          <button className="scroll-button">
            <Image
              src={require("/public/icons/arrow-down.svg")}
              alt="arrow down icon"
            />
          </button>
        </div>
        <div className="row">
          <div className="col-4">
            <Image
              src={require("/public/icons/simple-design.svg")}
              alt="simple design icon"
            />
            <h3 className="mb-1">Simple Design</h3>
            <p>
              Shopking is designed with the aim of enabling its users navigate
              the app easily and place their orders at anytime. With shopking,
              anybody using a smart device can place an order without hassle.
            </p>
          </div>
          <div className="col-4">
            <Image
              src={require("/public/icons/security-safe.svg")}
              alt="security safe icon"
            />
            <h3 className="mb-1">Fully Secured</h3>
            <p>
              With shopking, be rest assured that your orders and personal
              details are in safe hands. Shopking is fully encrypted and we will
              never share your data to any third-party.
            </p>
          </div>
          <div className="col-4">
            <Image
              src={require("/public/icons/call-calling.svg")}
              alt="customer support icons"
            />
            <h3 className="mb-1">24/7 Customer Support</h3>
            <p>
              At shopking we take the opinions of our customers very serious and
              channel lots of resources in making our support system available
              at all times.
            </p>
          </div>
        </div>
      </section>
      <section className="container home__list">
        <div className="row">
          <div className="col-6">
            <Image
              className="home__list-sample-image"
              alt="Make a list"
              src={require("/public/svgs/make-a-list.svg")}
              layout="responsive"
            />
          </div>
          <div className="col-6 home__list-content">
            <h2 className="mb-1 heading">
              Download shopking and create an account today to enjoy great
              shopping experience at the comfort of your home.
            </h2>
            <p className="mb-2">
              We are determined in making life easy for you and enhancing your
              productivity. With shopking you are 100% sure your daily shopping
              is covered.
            </p>
            <ul>
              <li>Get on Google Playstore & Apple Store.</li>
              <li>Download Shopking on Your Device.</li>
              <li>Create an Account and Make Your First Shopping List.</li>
              <li>Get Your Orders Delivered to Your Doorstep Within 24hrs.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container home__list">
        <div className="row">
          <div className="col-6 home__everywhere">
            <h2 className="mb-1 heading">
              Stay Where You Are Shop Everywhere Else
            </h2>
            <p className="mb-2">
              With shopking, you can easily create a shopping list and shop on
              the go!
            </p>
            <ul className="mb-3">
              <li>Make a list.</li>
              <li>Create an order.</li>
              <li>Make Payments.</li>
            </ul>
            <span className="ellipse-bg">
              <Image alt="ellipse" src={require("/public/svgs/ellipse.svg")} />
            </span>

            <UI.Button
              type="outline"
              rightIcon={
                <Image
                  src={require("/public/icons/logout.svg")}
                  alt="Logout Icon"
                  width={18}
                  height={18}
                />
              }
            >
              Start Shopping
            </UI.Button>
          </div>

          <div className="col-6 text--right">
            <Image
              className="home__list-sample-image"
              alt="Shop Everywhere Else"
              src={require("/public/svgs/shop-everywhere-else.svg")}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

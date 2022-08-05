import type { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import MetaTags from "../components/MetaTags";
import * as UI from "../components/ui";

const Home: NextPage = () => {
  return (
    <>
      <MetaTags title="Shopking" />

      <div className="home">
        <div className="home__hero">
          <div className="container">
            <div className="row">
              <div className="col-6 home__hero-content">
                <h1 className="heading mb-2">
                  {/* Take Your Shopping Experience To The Next Level.. */}
                </h1>
                <p className="sub-heading">
                  With Shopking, you can be sure to focus on important things
                  that matters to you while We do your shopping /errands. We
                  bring luxury to you!
                </p>
              </div>
              <div className="col-6 text--right animate__animated animate__fadeInUp wow">
                <Image
                  alt="Create Shopping List"
                  src={require("/public/svgs/home-hero.svg")}
                  className="home__hero-image"
                />
              </div>
            </div>
            <p className="mb-1 mt-3 animate__animated animate__bounceInLeft wow">
              Backed By
            </p>
            <div className="backed animate__animated animate__bounceInLeft wow">
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
          <div className="home__features-scroll mb-2 animate__animated animate__pulse animate__infinite wow">
            <button className="scroll-button">
              <Image
                src={require("/public/icons/arrow-down.svg")}
                alt="arrow down icon"
              />
            </button>
          </div>
          <div className="row">
            <div className="col-4 animate__animated animate__fadeInUp wow">
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
            <div className="col-4 animate__animated animate__fadeInUp animate__delay-1s wow">
              <Image
                src={require("/public/icons/security-safe.svg")}
                alt="security safe icon"
              />
              <h3 className="mb-1">Fully Secured</h3>
              <p>
                With shopking, be rest assured that your orders and personal
                details are in safe hands. Shopking is fully encrypted and we
                will never share your data to any third-party.
              </p>
            </div>
            <div className="col-4 animate__animated animate__fadeInUp animate__delay-2s wow">
              <Image
                src={require("/public/icons/call-calling.svg")}
                alt="customer support icons"
              />
              <h3 className="mb-1">24/7 Customer Support</h3>
              <p>
                At shopking we take the opinions of our customers very serious
                and channel lots of resources in making our support system
                available at all times.
              </p>
            </div>
          </div>
        </section>
        <section className="container home__list">
          <div className="row">
            <div className="col-6 animate__animated wow animate__zoomInDown">
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
                productivity. With shopking you are 100% sure your daily
                shopping is covered.
              </p>
              <ul>
                <li className="animate__animated animate__fadeInUp wow">
                  Get on Google Playstore & Apple Store.
                </li>
                <li className="animate__animated animate__fadeInUp animate__delay-1s wow">
                  Download Shopking on Your Device.
                </li>
                <li className="animate__animated animate__fadeInUp animate__delay-2s wow">
                  Create an Account and Make Your First Shopping List.
                </li>
                <li className="animate__animated animate__fadeInUp animate__delay-3s wow">
                  Get Your Orders Delivered to Your Doorstep Within 24hrs.
                </li>
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
                <li className="animate__animated animate__fadeInUp wow">
                  Make a list.
                </li>
                <li className="animate__animated animate__fadeInUp animate__delay-1s wow">
                  Create an order.
                </li>
                <li className="animate__animated animate__fadeInUp animate__delay-2s wow">
                  Make Payments.
                </li>
              </ul>
              <span className="ellipse-bg animate__animated animate__pulse animate__slower animate__infinite wow">
                <Image
                  alt="ellipse"
                  src={require("/public/svgs/ellipse.svg")}
                />
              </span>

              <UI.Button
                className="animate__animated animate__bounceIn animate__delay-3s wow"
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

            <div className="col-6 text--right animate__zoomIn animate__animated wow">
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
    </>
  );
};

export default Home;

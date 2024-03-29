import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="spacer" />
      <div className="container row">
        <div className="col-4 pr-2  mb-2">
          <Link href="/">
            <Image
              className="logo"
              alt="shopking logo"
              src={require("/public/images/logo.png")}
            />
          </Link>
          <p>
            Shopking is a mobile app developed by destreetboard technologies to
            help shop and deliver quality products for its users. Thereby giving
            them enough time to focus on their daily activities and enhance your
            shopping experience.
          </p>
        </div>
        <div className="col-2 pr-2  mb-2">
          <h2 className="mb-2">Quick Links</h2>
          <ul>
            <li>
              <Link href="/">Contat Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="col-3 pr-2 mb-2">
          <h2 className="mb-2">Products</h2>
          <ul>
            <li>
              <Link href="https://destreetboard.com">Destreetboard</Link>
            </li>
            <li>
              <Link href="/">Rodicash</Link>
              <span className="badge">Coming Soon</span>
            </li>
            <li>
              <Link href="/">Linktrex</Link>
              <span className="badge">Coming Soon</span>
            </li>
          </ul>
        </div>
        <div className="col-3  mb-2">
          <h2 className="mb-2">Contact Info</h2>
          <ul>
            <li>
              <Link href="https://goo.gl/maps/5A3dyTB7KpJn6zuP7">
                28 Edinburgh Rd, Ogui New Layout, 400252, Enugu.
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/+2348068907632">+234 806 890 7632</Link>
            </li>
            <li>
              <Link href="mailto:support@shopking.ng">support@shopking.ng</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="credit">
        <p>&copy; 2020-2022 Shopking. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

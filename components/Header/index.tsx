import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__left">
          <Link href="/">
            <Image
              className="logo"
              alt="shopking logo"
              src={require("/public/images/logo.png")}
            />
          </Link>
        </div>
        <div className="header__right">
          <Button
            target="__blank"
            href="https://apps.apple.com/ng/app/shopking/id1611047994"
            className="mr-1"
            leftIcon={
              <Image
                src={require("/public/svgs/apple-icon.svg")}
                alt="Apple Icon"
              />
            }
          >
            Get On iPhone
          </Button>
          <Button
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.destreetboard.shopking"
            leftIcon={
              <Image
                src={require("/public/svgs/android-icon.svg")}
                alt="Google Play Icon"
              />
            }
          >
            Get On Android
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

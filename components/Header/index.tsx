import Image from "next/image";
import { Button } from "../ui";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__left col-6">
          <Image
            className="logo"
            alt="shopking logo"
            src={require("/public/images/logo.png")}
          />
        </div>
        <div className="header__right col-6">
          <Button
            className="mr-1"
            leftIcon={
              <Image
                src={require("/public/svgs/apple-icon.svg")}
                alt="Apple Icon"
                width={18}
                height={18}
              />
            }
          >
            Get On iPhone
          </Button>
          <Button
            leftIcon={
              <Image
                src={require("/public/svgs/android-icon.svg")}
                alt="Google Play Icon"
                width={18}
                height={18}
                className="mt-5"
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

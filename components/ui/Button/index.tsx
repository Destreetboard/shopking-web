import cx from "classnames";

interface ButtonProps {
  children: any;
  type?: "primary" | "outline" | "secondary";
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  rightIcon,
  leftIcon,
  className,
  ...props
}) => {
  return (
    <>
      <a
        {...props}
        className={`${cx({
          btn: true,
          btn__primary: type === "primary" || type === undefined,
          btn__outline: type === "outline",
          btn__secondary: type === "secondary",
        })} ${className}`}
      >
        {leftIcon && <span className="left-icon">{leftIcon}</span>}
        <span className="">{children}</span>
        {rightIcon && <span className="right-icon">{rightIcon}</span>}
      </a>
    </>
  );
};

export { Button };

import { Button, ButtonProps } from "antd";
import clsx from "clsx";

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { type, htmlType } = rest;
  let combinedClassName = clsx(
    "rounded-none border-none leading-5 px-[30px] py-[10px] h-auto",
    className
  );

  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={combinedClassName}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

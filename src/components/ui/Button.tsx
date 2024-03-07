import { Button as AntButton, ButtonProps } from "antd";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  width?: string;
  height?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  width,
  height,
  children,
  className,
  ...rest
}) => {
  const { type, htmlType } = rest;

  return (
    <AntButton
      type={type}
      className={clsx("rounded-none border-none", className)}
      htmlType={htmlType}
      style={{ width, height }}
      {...rest}
    >
      {children}
    </AntButton>
  );
};

export default Button;

import { Button, ButtonProps } from "antd";
import clsx from "clsx";

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { type, htmlType } = rest;
  let combinedClassName = clsx(className); // დამატებითი კლასებისთვის
  console.log(combinedClassName);

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

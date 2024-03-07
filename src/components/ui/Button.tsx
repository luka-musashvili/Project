import { Button, ButtonProps } from "antd";
import clsx from "clsx";

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const { type, htmlType, className } = rest;
  let combinedClassName = clsx(className); // დამატებითი კლასები სამომავლოდ
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

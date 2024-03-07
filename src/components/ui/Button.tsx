import { Button, ButtonProps } from "antd";
// import clsx from 'clsx';

interface CustomButtonProps extends ButtonProps {
  customClassName?: string;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  customClassName,
  children,
  ...rest
}) => {
  const { type, htmlType, className } = rest;
  const baseClassName = " w-[201px]";

  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={className + baseClassName}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

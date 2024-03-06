import { Button, ButtonProps } from "antd";

interface CustomButtonProps extends ButtonProps {
  width?: string;
  height?: string;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  width,
  height,
  children,
  ...rest
}) => {
  const { type, htmlType } = rest;

  return (
    <Button type={type} htmlType={htmlType} style={{ width, height }} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonComponent;

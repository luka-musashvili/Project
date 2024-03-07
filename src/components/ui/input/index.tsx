import { Input as AntInput, InputProps } from "antd";
import clsx from "clsx";

type ComponentProps = InputProps;

const Input = ({ className, ...rest }: ComponentProps) => {
  return (
    <AntInput
      className={clsx("rounded-none shadow-inner", className)}
      {...rest}
    />
  );
};

const PasswordInput = ({ className, ...rest }: ComponentProps) => (
  <AntInput.Password
    className={clsx("rounded-none shadow-inner", className)}
    {...rest}
  />
);

Input.Password = PasswordInput;

export default Input;

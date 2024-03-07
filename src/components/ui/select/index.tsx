import { Select as AntSelect, SelectProps } from "antd";
import clsx from "clsx";

type ComponentProps = SelectProps;

const Select = ({ className, ...rest }: ComponentProps) => {
  return (
    <AntSelect
      style={{ borderRadius: 0 }}
      className={clsx("rounded-none shadow-inner", className)}
      {...rest}
    />
  );
};

export default Select;

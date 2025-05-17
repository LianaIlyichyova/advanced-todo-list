import StyledSelect from "./Select.styles";
import type { SelectProps } from "antd";

const Select = (props: SelectProps) => {
  return (
    <StyledSelect
      {...props}
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
    />
  );
};

export default Select;

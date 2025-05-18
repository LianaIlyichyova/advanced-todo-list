import type { SelectProps } from "antd";

import StyledSelect from "./Select.styles";

const Select = (props: SelectProps) => {
  return (
    <StyledSelect
      {...props}
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
    />
  );
};

export default Select;

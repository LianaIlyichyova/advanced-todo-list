import styled from "styled-components";

import { Select } from "antd";

const StyledSelect = styled(Select)`
  max-width: 300px;

  .ant-select-arrow,
  .ant-select-selection-item-remove,
  .ant-select-item-option-state {
    color: inherit !important;
  }
`;

export default StyledSelect;

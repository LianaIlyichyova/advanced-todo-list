import { spacings } from "@styles/constants";
import { Select } from "antd";
import styled from "styled-components";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.l}px;
`;

const StyledSelect = styled(Select)`
  min-width: 200px;
`;

export { StyledFilters, StyledSelect };

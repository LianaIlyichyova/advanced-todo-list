import { spacings } from "@styles/constants";
import Select from "@components/Select";
import styled from "styled-components";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.l}px;
`;

const StyledSelect = styled(Select)`
  min-width: 300px !important;
`;

export { StyledFilters, StyledSelect };

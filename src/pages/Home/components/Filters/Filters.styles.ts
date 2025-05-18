import { spacings } from "@styles/constants";
import Select from "@components/Select";
import styled from "styled-components";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.l}px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${spacings.m}px;
  }
`;

const StyledSelect = styled(Select)`
  min-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export { StyledFilters, StyledSelect };

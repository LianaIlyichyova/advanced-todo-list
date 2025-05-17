import { spacings } from "@styles/constants";
import styled from "styled-components";

const StyledThemeToggleWrapper = styled.div`
  position: fixed;
  top: ${spacings.m}px;
  right: ${spacings.s}px;
  z-index: 9999;
  background: ${({ theme }) => theme.token.colorBgContainer};
  border-radius: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 4px ${({ theme }) => theme.token.colorTextPrimary};

  .ant-switch {
    border-radius: 8px;
  }
`;

export { StyledThemeToggleWrapper };

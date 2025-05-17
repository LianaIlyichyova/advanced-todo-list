import { spacings } from "@styles/constants";
import styled from "styled-components";

const StyledThemeToggleWrapper = styled.div`
  position: fixed;
  bottom: ${spacings.s}px;
  right: ${spacings.s}px;
  z-index: 9999;
  background: ${({ theme }) => theme.token.colorBgContainer};
  border-radius: 8px;
  padding: ${spacings.xxs}px;
  box-shadow: 0 0 4px ${({ theme }) => theme.token.colorTextPrimary};
`;

export { StyledThemeToggleWrapper };

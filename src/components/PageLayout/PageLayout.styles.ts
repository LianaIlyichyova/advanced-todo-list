import { spacings } from "@styles/constants";
import { Layout } from "antd";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  width: 100%;

  .ant-divider-horizontal {
    margin: 0;
  }
`;

const StyledHeader = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled(Layout.Content)`
  margin-top: ${spacings.l}px;
  padding: 0 ${spacings.xl}px;
  display: flex;
  flex-direction: column;
  gap: ${spacings.l}px;
`;

const StyledSider = styled(Layout.Sider)``;

export { StyledContent, StyledLayout, StyledHeader, StyledSider };

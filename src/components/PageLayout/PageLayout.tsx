import { Divider } from "antd";
import {
  StyledLayout,
  StyledContent,
  StyledHeader,
  StyledSider,
} from "./PageLayout.styles";
import type { ReactNode } from "react";

interface PageLayoutProps {
  header: ReactNode;
  content: ReactNode;
  sider?: ReactNode;
}

const PageLayout = ({ header, content, sider }: PageLayoutProps) => {
  return (
    <StyledLayout>
      {header ? <StyledHeader>{header}</StyledHeader> : <></>}
      <Divider />
      <StyledContent>{content}</StyledContent>
      {sider ? <StyledSider>{sider}</StyledSider> : <></>}
    </StyledLayout>
  );
};

export default PageLayout;

import type { ReactNode } from "react";

import { Divider } from "antd";
import { StyledLayout, StyledContent, StyledHeader } from "./PageLayout.styles";

interface PageLayoutProps {
  header: ReactNode;
  content: ReactNode;
  sider?: ReactNode;
}

const PageLayout = ({ header, content }: PageLayoutProps) => {
  return (
    <StyledLayout>
      {header ? <StyledHeader>{header}</StyledHeader> : <></>}
      <Divider />
      <StyledContent>{content}</StyledContent>
    </StyledLayout>
  );
};

export default PageLayout;

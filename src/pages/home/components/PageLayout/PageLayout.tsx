import { Divider } from "antd";
import { StyledLayout, StyledContent, StyledHeader } from "./PageLayout.styles";
import type { ReactNode } from "react";

interface PageLayoutProps {
  header: ReactNode;
  content: ReactNode;
}

const PageLayout = ({ header, content }: PageLayoutProps) => {
  return (
    <StyledLayout>
      <StyledHeader>{header}</StyledHeader>
      <Divider />
      <StyledContent>{content}</StyledContent>
    </StyledLayout>
  );
};

export default PageLayout;

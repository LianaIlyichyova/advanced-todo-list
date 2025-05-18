import { spacings } from "@styles/constants";
import styled from "styled-components";
import { Card, Flex } from "antd";

const StyledCard = styled(Card)`
  height: 85vh;
  overflow: auto;
`;

const StyledDetail = styled.div`
  display: flex;
  gap: ${spacings.xl}px;
`;

const StyledTitle = styled.div`
  max-width: 350px;
`;

const StyledTag = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-weight: 600;
`;

const StyledDetails = styled(Flex)`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledDivider = styled.div`
  height: 100%;
  border-left: 1px solid #e0e0e0;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  StyledCard,
  StyledDetail,
  StyledTitle,
  StyledTag,
  StyledDivider,
  StyledDetails,
};

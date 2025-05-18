import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  min-height: 75vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    .ant-card-body {
      padding: 8px;
    }
  }
`;

const StyledBoardWrapper = styled.div`
  display: flex;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    align-items: center;
  }
`;

export { StyledBoardWrapper, StyledCard };

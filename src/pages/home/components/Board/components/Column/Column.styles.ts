import Typography from "@components/Typography";
import styled from "styled-components";
import { fontSizes, spacings } from "@styles/constants";

const StyledColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  border-radius: 12px;
  padding: 0 ${spacings.s}px;
  height: 72vh;

  @media (max-width: 768px) {
    height: max-content;
    width: 100%;
    padding: 0 ${spacings.s}px;
    box-sizing: border-box;
  }
`;

const StyledColumnContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: ${spacings.s}px ${spacings.s}px ${spacings.s}px ${spacings.xxs}px;

  @media (max-width: 768px) {
    overflow-y: visible;
    padding: 0;
  }
`;

const StyledColumnHeader = styled.div`
  margin-bottom: ${spacings.s}px;
  position: sticky;
  top: 0;
  z-index: 3;
`;

const StyledHeaderContent = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacings.xs}px;
  padding: ${spacings.xxs}px ${spacings.s}px;
  background-color: ${({ $color }) => $color};
  color: white;
  border-radius: 999px;
  font-weight: 600;
  font-size: ${fontSizes.lg};
  cursor: pointer;
  user-select: none;

  width: 100%;
  box-sizing: border-box;
`;

const StyledCountCircle = styled.div`
  background-color: white;
  color: black;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  min-width: 32px;
  text-align: center;
`;

const StyledTitleText = styled(Typography)`
  flex: 1;
`;

export {
  StyledTitleText,
  StyledCountCircle,
  StyledColumnHeader,
  StyledColumnWrapper,
  StyledHeaderContent,
  StyledColumnContent,
};

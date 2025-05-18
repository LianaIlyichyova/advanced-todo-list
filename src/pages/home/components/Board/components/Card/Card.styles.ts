import Typography from "@components/Typography";
import { spacings } from "@styles/constants";
import styled from "styled-components";

const StyledCardWrapper = styled.div<{ isDragging?: boolean }>`
  width: 100%;
  max-width: 350px;
  background: ${({ theme }) => theme.token.colorPrimaryBg};
  border-radius: 12px;
  box-shadow: 0 0 2px ${({ theme }) => theme.token.colorTextPrimary};
  padding: ${spacings.s}px;
  margin: 0 auto ${spacings.s}px auto;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  transition: opacity 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledCardTitle = styled(Typography)`
  margin-bottom: ${spacings.xs};
  white-space: normal;
  word-break: break-word;
`;

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const StyledStats = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
`;

const StyledPriorityTag = styled.span<{ $color: string }>`
  display: inline-block;
  background-color: ${({ $color }) => $color};
  color: white;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 8px;
  width: fit-content;
`;

const StyledCategoryTag = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export {
  StyledCardFooter,
  StyledCardTitle,
  StyledCardWrapper,
  StyledStats,
  StyledPriorityTag,
  StyledCategoryTag,
};

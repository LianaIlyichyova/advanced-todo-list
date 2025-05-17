import Typography from "@components/Typography";
import { fontSizes, spacings } from "@styles/constants";
import styled from "styled-components";

const BoardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ColumnWrapper = styled.div`
  border-radius: 12px;
  padding: ${spacings.s}px;
  min-width: 320px;
`;

const CardWrapper = styled.div<{ isDragging?: boolean }>`
  width: 350px;
  background: ${({ theme }) => theme.token.colorPrimaryBg};
  border-radius: 12px;
  box-shadow: 0 0 2px ${({ theme }) => theme.token.colorTextPrimary};
  padding: ${spacings.s}px;
  margin-bottom: ${spacings.s}px;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
`;

const CardTitle = styled(Typography)`
  margin-bottom: ${spacings.xs};
  white-space: normal;
  word-break: break-word;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
`;

const ColumnHeader = styled.div`
  margin-bottom: ${spacings.s}px;
`;

const HeaderContent = styled.div<{ $color: string }>`
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

  svg {
    font-size: 18px;
  }
`;

const CountCircle = styled.div`
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: ${spacings.xxs}px ${spacings.s}px;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  min-width: 32px;
  text-align: center;
`;

const TitleText = styled(Typography)`
  flex: 1;
`;

const PriorityTag = styled.span<{ $color: string }>`
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

const CategoryTag = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export {
  TitleText,
  CountCircle,
  ColumnHeader,
  ColumnWrapper,
  HeaderContent,
  Stats,
  CardFooter,
  CardTitle,
  CardWrapper,
  BoardWrapper,
  PriorityTag,
  CategoryTag,
};

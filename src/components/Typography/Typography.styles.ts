import styled, { css } from "styled-components";
import { Typography } from "antd";
import { fontSizes, type FontSize, lineHeights } from "@styles/constants";

interface StyledTypographyProps {
  $fontSize: FontSize;
  $colorValue?: string;
  $fontWeight?: string;
  $textDecoration?: React.CSSProperties["textDecoration"];
}

const getCss = (
  fontSize: FontSize,
  lineHeight: keyof typeof lineHeights
) => css`
  font-size: ${fontSizes[fontSize]};
  line-height: ${lineHeights[lineHeight]};
`;

const typographyStyles = {
  xs: getCss("xs", "lh16"),
  sm: getCss("sm", "lh22"),
  md: getCss("md", "lh30"),
  lg: getCss("lg", "lh18"),
  xl: getCss("xl", "lh24"),
} as const;

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${({ $fontSize }) => typographyStyles[$fontSize]};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-decoration: ${({ $textDecoration }) => $textDecoration};
  color: ${({ $colorValue }) => $colorValue ?? "inherit"};
`;

export default StyledTypography;

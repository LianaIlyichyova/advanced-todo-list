import React from "react";

// theme from Ant Design to get colors
import { theme } from "antd";

import { type FontSize } from "@styles/constants";

import StyledTypography from "./Typography.styles";

// This object connects color names to Ant Design theme colors
const colorVariantToTokenMap = {
  primary: "colorText",
  secondary: "colorTextSecondary",
  heading: "colorTextHeading",
  error: "colorError",
} as const;

// This type is for color names we can use, plus "extend" for custom colors
type ColorVariant = keyof typeof colorVariantToTokenMap | "extend";

export interface TypographyProps extends React.PropsWithChildren {
  className?: string;
  fontSize?: FontSize;
  fontWeight?: string;
  color?: ColorVariant;
  variant?: "p" | "h1" | "h2" | "h3" | "span" | "label";
  textTransform?: React.CSSProperties["textTransform"];
  textDecoration?: React.CSSProperties["textDecoration"];
}

const Typography = ({
  children,
  className,
  variant = "p",
  fontSize = "sm",
  fontWeight = "400",
  color = "primary",
  textDecoration = "none",
}: TypographyProps) => {
  const { token } = theme.useToken();

  const colorValue =
    color === "extend"
      ? undefined
      : token[colorVariantToTokenMap[color]] ?? token.colorText;

  return (
    <StyledTypography
      as={variant}
      className={className}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $textDecoration={textDecoration}
      $colorValue={colorValue}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;

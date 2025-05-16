import React from "react";
import StyledTypography from "./Typography.styles";
import { theme } from "antd";
import { type FontSize } from "@styles/constants";

const colorVariantToTokenMap = {
  primary: "colorText",
  secondary: "colorTextSecondary",
  heading: "colorTextHeading",
  error: "colorError",
} as const;

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

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant = "p",
  fontSize = "sm",
  fontWeight = "400",
  color = "primary",
  textTransform = "none",
  textDecoration = "none",
}) => {
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
      $textTransform={textTransform}
      $textDecoration={textDecoration}
      $colorValue={colorValue}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;

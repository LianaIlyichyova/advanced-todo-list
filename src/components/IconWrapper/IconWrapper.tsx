import React from "react";
import StyledIconWrapper from "./IconWrapper.styles";

interface IconWrapperProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
  size?: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const IconWrapper = ({
  color,
  size = 24,
  children,
  onClick,
}: IconWrapperProps) => {
  return (
    <StyledIconWrapper color={color} size={size} onClick={onClick}>
      {children}
    </StyledIconWrapper>
  );
};

export default IconWrapper;

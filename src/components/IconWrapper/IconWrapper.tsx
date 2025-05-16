import React from "react";
import StyledIconWrapper from "./IconWrapper.styles";

interface IconWrapperProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
  size?: number;
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  color,
  size = 24,
  children,
}) => {
  return (
    <StyledIconWrapper color={color} size={size}>
      {children}
    </StyledIconWrapper>
  );
};

export default IconWrapper;

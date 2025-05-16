import styled from "styled-components";

interface StyledIconWrapperProps {
  color?: string;
  hoverColor?: string;
  size?: string | number;
}

const StyledIconWrapper = styled.span<StyledIconWrapperProps>`
  color: ${({ color, theme }) => (color ? color : theme.token.colorIcon)};
  font-size: ${({ size }) =>
    typeof size === "number" ? `${size}px` : size ?? "24px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ hoverColor, theme }) =>
      hoverColor ? hoverColor : theme.token.colorIconHover};
  }
`;

export default StyledIconWrapper;

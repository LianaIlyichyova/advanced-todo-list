const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "18px",
  lg: "16px",
  xl: "30px",
} as const;

export type FontSize = keyof typeof fontSizes;

export default fontSizes;

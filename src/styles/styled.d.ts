import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: {
      colorBgTertiary: string;
      colorIcon: string;
      fontSizeIcon: number | string;
      colorIconHover: string;
    };
  }
}

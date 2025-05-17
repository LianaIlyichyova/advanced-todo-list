import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: {
      colorBgTertiary: string;
      colorPrimaryBg: string;
      colorBgContainer: string;
      colorIcon: string;
      fontSizeIcon: number | string;
      colorIconHover: string;
      colorTextPrimary: string;
      colorBgContainer: string;
    };
  }
}

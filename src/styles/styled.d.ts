import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: {
      colorPrimaryBg: string;
      colorBgContainer: string;
      colorIcon: string;
      colorIconHover: string;
      colorTextPrimary: string;
    };
  }
}

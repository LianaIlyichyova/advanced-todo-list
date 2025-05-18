import { type ThemeConfig } from "antd";
import { spacings } from "./constants";

export const baseTokens: ThemeConfig = {
  token: { fontFamily: "'Plus Jakarta Sans', 'Open Sans', Arial, sans-serif" },
  components: {
    Modal: {
      padding: spacings.l,
    },
    Layout: {
      headerPadding: spacings.xl,
    },
    Divider: {
      margin: 0,
    },
    Select: {
      fontSizeIcon: 14,
    },
  },
};

export default baseTokens;

import spacingConfigs from "../spacingConfigs";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const dark: ThemeConfig = {
  token: {
    fontFamily: "Open Sans, Arial, sans-serif",
    colorText: colors.colorTextPrimary,
    colorTextHeading: colors.white,
    colorIconHover: colors.white,
    colorIcon: colors.colorTextSecondary,
    fontSizeIcon: 24,
    colorBgBase: colors.colorBgDark,
  },
  components: {
    ...spacingConfigs,
    Form: {
      labelColor: colors.white,
    },
    Modal: {
      contentBg: colors.colorBgDark,
    },
    Layout: {
      bodyBg: colors.colorBgDark,
      headerBg: "transparent",
    },
    Select: {
      // colorBgContainer: "red",
    },
  },
};
export default dark;

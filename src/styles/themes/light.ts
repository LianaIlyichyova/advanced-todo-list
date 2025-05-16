import spacingConfigs from "../spacingConfigs";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const light: ThemeConfig = {
  token: {
    fontFamily: "Open Sans, Arial, sans-serif",
    colorText: colors.colorTextPrimary,
    colorTextHeading: colors.colorTextTertiary,
    colorIcon: colors.colorTextTertiary,
    colorIconHover: colors.colorTextSecondary,
    fontSizeIcon: 24,
    colorBgBase: colors.white,
  },
  components: {
    ...spacingConfigs,
    Form: {
      labelColor: colors.colorTextTertiary,
    },
    Modal: {
      contentBg: colors.white,
    },
    Layout: {
      bodyBg: colors.white,
      headerBg: "transparent",
    },
    Select: {
      fontSizeIcon: 16,
      // colorBgContainer: "red",
    },
  },
};
export default light;

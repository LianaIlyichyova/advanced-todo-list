import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const light: ThemeConfig = {
  token: {
    colorText: colors.colorTextPrimary,
    colorTextHeading: colors.colorTextTertiary,
    colorIcon: colors.colorTextTertiary,
    colorIconHover: colors.colorTextSecondary,
    fontSizeIcon: 24,
    colorBgBase: colors.white,
    colorPrimaryBg: colors.white,
  },
  components: {
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
      controlItemBgActive: colors.colorBgContainer,
      controlItemBgHover: colors.colorBgContainer,
      colorBorder: colors.colorBgContainer,
      activeBorderColor: colors.colorBgSecondary,
    },
    Button: {
      colorPrimary: colors.colorBgButton,
      colorPrimaryHover: colors.colorBgButtonHover,
      colorTextLightSolid: colors.white,
      colorBorder: colors.colorBgButton,
      colorText: colors.colorTextTertiary,
      colorPrimaryActive: colors.colorLabelDark,
    },
  },
};
export default light;

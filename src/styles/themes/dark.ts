import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const dark = {
  token: {
    colorText: colors.white,
    colorTextHeading: colors.white,
    colorIconHover: colors.white,
    colorIcon: colors.colorTextSecondary,
    fontSizeIcon: 24,
    colorBgBase: colors.colorBgPrimary,
    colorBgContainer: colors.colorTextSecondary,
    colorPrimaryBg: colors.colorBgSecondary,
    scrollbarThumb: "rgba(255, 255, 255, 0.2)", // light gray
    scrollbarThumbHover: "rgba(255, 255, 255, 0.3)",
    colorTextSecondary: colors.colorLabelDark,
  },
  components: {
    Form: {
      labelColor: colors.colorLabelDark,
    },
    Modal: {
      contentBg: colors.colorBgTertiary,
      headerBg: colors.colorBgTertiary,
    },
    Layout: {
      bodyBg: colors.colorBgPrimary,
      headerBg: "transparent",
    },
    Select: {
      colorBgElevated: colors.colorBgTertiary,
      colorText: colors.white,
      controlItemBgActive: colors.colorBgSecondary,
      controlItemBgHover: colors.colorBgSecondary,
      colorBorder: colors.colorTextSecondary,
      activeBorderColor: colors.white,
      selectorBg: colors.colorBgTertiary,
      hoverBorderColor: colors.white,
      colorTextPlaceholder: colors.colorLabelDark,
    },
    Divider: {
      colorSplit: colors.colorBgTertiary,
    },
    Button: {
      colorPrimary: colors.colorBgButton,
      colorTextLightSolid: colors.white,
      colorPrimaryHover: colors.colorBgButtonHover,
      colorPrimaryActive: colors.colorBgButton,
      colorBorder: colors.colorBgButton,
      colorText: colors.white,
      colorBgContainer: colors.colorBgTertiary,
    },
    Input: {
      colorBgBase: colors.white,
      addonBg: colors.white,
      colorBorder: colors.colorLabelDark,
      colorText: colors.white,
      colorTextPlaceholder: colors.colorLabelDark,
      activeBorderColor: colors.white,
      hoverBorderColor: colors.white,
      colorBgContainer: colors.colorBgTertiary,
    },
    Card: {
      colorBgContainer: colors.colorBgSecondary,
    },
  },
} as ThemeConfig & DefaultTheme;

export default dark;

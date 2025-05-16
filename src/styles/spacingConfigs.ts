import { type ThemeConfig } from "antd";
import { spacings } from "./constants";

const spacingConfigs: Partial<ThemeConfig["components"]> = {
  Modal: {
    padding: spacings.l,
  },
  Layout: {
    headerPadding: spacings.xl,
  },
  Divider: {
    margin: 0,
  },
};

export default spacingConfigs;

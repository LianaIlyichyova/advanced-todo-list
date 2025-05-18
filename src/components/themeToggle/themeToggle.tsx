import { useDispatch, useSelector } from "react-redux";

import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

import { toggleTheme } from "@store/themeSlice";
import type { RootState } from "@store/index";

import { StyledThemeToggleWrapper } from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const isDark = theme === "dark";

  return (
    <StyledThemeToggleWrapper>
      <Switch
        checked={isDark}
        onChange={(checked) =>
          dispatch(toggleTheme(checked ? "dark" : "light"))
        }
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </StyledThemeToggleWrapper>
  );
};

export default ThemeToggle;

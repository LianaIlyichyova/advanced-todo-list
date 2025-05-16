import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@store/themeSlice";
import type { RootState } from "@store/index";
import { StyledThemeToggleWrapper } from "./themeToggle.styles";

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
        checkedChildren="🌙"
        unCheckedChildren="🌞"
      />
    </StyledThemeToggleWrapper>
  );
};

export default ThemeToggle;

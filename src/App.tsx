import type { DefaultTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ConfigProvider, App as AntdApp } from "antd";
import { Route, Routes } from "react-router";
import { DetailView, HomePage } from "./pages";
import themes from "./styles/themes";
import spacingConfigs from "@styles/spacingConfigs";
import type { ThemeType } from "./styles/constants";
import { ThemeProvider } from "styled-components";
import merge from "lodash.merge";
import CSSResetStyles from "./configs/css-reset";
import { decrement, increment } from "./store/countSlice";
import type { AppDispatch, RootState } from "./store";
import ThemeToggle from "@components/themeToggle";

import { RouterPaths } from "@utils/routes";

function App() {
  const count = useSelector((state: RootState) => state.count.count);
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const baseTheme = themes[currentTheme as ThemeType];

  const antdTheme = {
    token: baseTheme.token,
    components: merge({}, baseTheme.components, spacingConfigs),
  };

  const styledTheme: DefaultTheme = baseTheme as DefaultTheme;

  return (
    <div className="App">
      <CSSResetStyles />
      <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={styledTheme}>
          <AntdApp>
            <Routes>
              <Route path={RouterPaths.Home} element={<HomePage />} />
              <Route path={RouterPaths.DetailView} element={<DetailView />} />
            </Routes>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}> +</button>
            <button onClick={() => dispatch(decrement())}> -</button>
            <button
              onClick={() =>
                dispatch(() => setTimeout(() => dispatch(increment()), 300))
              }
            >
              async
            </button>
            <ThemeToggle />
          </AntdApp>
        </ThemeProvider>
      </ConfigProvider>
    </div>
  );
}

export default App;

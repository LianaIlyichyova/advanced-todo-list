import { useSelector } from "react-redux";
import { ConfigProvider, App as AntdApp, Spin } from "antd";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import { merge } from "lodash";
import type { RootState } from "./store";

import ThemeToggle from "@components/ThemeToggle";
import { RouterPaths } from "@assets/routes";

import CSSResetStyles from "@styles/css-reset";
import type { ThemeType } from "./styles/constants";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import baseTokens from "@styles/baseTokens";
import themes from "./styles/themes";

const HomePage = lazy(() => import("./pages/Home"));
const DetailView = lazy(() => import("./pages/DetailView"));

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const baseTheme = themes[currentTheme as ThemeType];

  const antdTheme = {
    token: {
      ...baseTokens.token,
      ...baseTheme.token,
    },
    components: merge({}, baseTheme.components, baseTokens.components),
  };

  const styledTheme: DefaultTheme = baseTheme as DefaultTheme;

  return (
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={styledTheme}>
        <CSSResetStyles />
        <AntdApp>
          <Suspense fallback={<Spin fullscreen />}>
            <Routes>
              <Route path={RouterPaths.Home} element={<HomePage />} />
              <Route
                path={`${RouterPaths.DetailView}/:id`}
                element={<DetailView />}
              />
            </Routes>
          </Suspense>
          <ThemeToggle />
        </AntdApp>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;

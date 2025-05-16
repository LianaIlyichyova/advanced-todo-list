import { Theme } from "../constants";

import light from "./light";
import dark from "./dark";

const themes = {
  [Theme.Dark]: dark,
  [Theme.Light]: light,
} as const;

export default themes;

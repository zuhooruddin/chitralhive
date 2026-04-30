import { components } from "./components";
import { themeColors, darkThemeColors, primary, blue, marron, paste } from "./themeColors";
import { typography } from "./typography";

const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  FURNITURE: "FURNITURE",
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};
/*
WE CREATED MULTIPLE THEME OPTIONS FOR DIFFERENT SHOP VARIATION.

YOU CAN JUST KEEP [THEMES.DEFAULT] AND REMOVE OTHER THEME OPTIONS.
*/

const fallbackPrimary = {
  main: "#D23F57",
  light: "#FCE9EC",
  dark: "#D91F33",
  contrastText: "#FFFFFF",
};

const buildPrimary = (source) => {
  const base = source && typeof source === "object" ? source : {};
  return {
    ...fallbackPrimary,
    ...base,
    light: base.light || base[100] || fallbackPrimary.light,
  };
};

const buildThemeOption = ({
  mode,
  primaryKey
}) => {
  const paletteSource = mode === "dark" ? darkThemeColors : themeColors;
  let selectedPrimary = primary;

  if (primaryKey && paletteSource?.[primaryKey]) {
    selectedPrimary = paletteSource[primaryKey];
  } else if (primaryKey === "paste") {
    selectedPrimary = paste;
  } else if (primaryKey === "info") {
    selectedPrimary = blue;
  } else if (primaryKey === "marron") {
    selectedPrimary = marron;
  }

  return {
    typography,
    breakpoints,
    components: { ...components
    },
    palette: { ...paletteSource,
      mode,
      primary: buildPrimary(selectedPrimary)
    }
  };
}; // Light theme options

const themesOptions = {
  [THEMES.DEFAULT]: buildThemeOption({
    mode: "light"
  }),
  [THEMES.GROCERY]: buildThemeOption({
    mode: "light"
  }),
  [THEMES.FURNITURE]: buildThemeOption({
    mode: "light",
    primaryKey: "paste"
  }),
  [THEMES.HEALTH]: buildThemeOption({
    mode: "light",
    primaryKey: "info"
  }),
  [THEMES.GIFT]: buildThemeOption({
    mode: "light",
    primaryKey: "marron"
  })
};

// Dark theme options
const darkThemesOptions = {
  [THEMES.DEFAULT]: buildThemeOption({ mode: "dark" }),
  [THEMES.GROCERY]: buildThemeOption({ mode: "dark" }),
  [THEMES.FURNITURE]: buildThemeOption({ mode: "dark", primaryKey: "paste" }),
  [THEMES.HEALTH]: buildThemeOption({ mode: "dark", primaryKey: "info" }),
  [THEMES.GIFT]: buildThemeOption({ mode: "dark", primaryKey: "marron" }),
};

const themeOptions = (pathname, isDark = false) => {
  const themeSource = isDark ? darkThemesOptions : themesOptions;
  let themeName = THEMES.DEFAULT;

  switch (pathname) {
    case "/":
    case "/grocery1":
    case "/grocery2":
    case "/grocery3":
    case "/gadget-shop":
    case "/fashion-shop":
    case "/market-1":
      themeName = THEMES.DEFAULT;
      break;

    case "/furniture-shop":
      themeName = THEMES.FURNITURE;
      break;

    case "/healthbeauty-shop":
      themeName = THEMES.HEALTH;
      break;

    case "/gift-shop":
      themeName = THEMES.GIFT;
      break;

    default:
      themeName = THEMES.DEFAULT;
      break;
  }
  /*
        IF YOU REMOVE THE switch case, YOU NEED TO ASSIGN VALUE TO themeOptions
        E.G. themeOptions = themesOptions[THEMES.DEFAULT];
    */
  return themeSource[themeName];
};

export default themeOptions;

import { color } from "@/core/config/designTokens/color";
import { Color, PaletteColor } from "@mui/material";
import { createTheme, getContrastRatio } from "@mui/material/styles";

declare module "@mui/material/styles" {
  //eslint-disable-next-line
  interface Palette {
    neutralLight: PaletteColor;
    neutralDark: PaletteColor;
    common: Palette["common"];
    blueLight: PaletteColor;
    blueDark: PaletteColor;
    grey: Color;
  }
  //eslint-disable-next-line
  interface PaletteOptions {
    neutralLight: PaletteColor;
    neutralDark: PaletteColor;
    common?: PaletteOptions["common"];
    blueLight: PaletteColor;
    blueDark: PaletteColor;
    grey?: Partial<Color>;
  }
}

declare module "@mui/material/Button" {
  //eslint-disable-next-line
  interface ButtonPropsColorOverrides {
    common: true;
    neutralLight: true;
    neutralDark: true;
    blueLight: true;
    blueDark: true;
    grey: true;
  }
}

export let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    common: {
      black: color.neutral[900],
      white: color.neutral[50],
    },
    blueLight: {
      light: color.blue[400],
      main: color.blue[500],
      dark: color.blue[400],
      contrastText:
        getContrastRatio(color.blue[500], "#fff") > 4.5
          ? theme.palette.common.white
          : theme.palette.common.black,
    },
    blueDark: {
      light: color.blue[400],
      main: color.blue[500],
      dark: color.blue[700],
      contrastText:
        getContrastRatio(color.blue[500], "#fff") > 4.5
          ? theme.palette.common.white
          : theme.palette.common.black,
    },
    grey: {
      50: color.grey[50],
      200: color.grey[200],
      300: color.grey[300],
      400: color.grey[400],
      500: color.grey[500],
      600: color.grey[600],
      700: color.grey[700],
      900: color.grey[900],
    },
    neutralLight: theme.palette.augmentColor({
      color: {
        main: theme.palette.common.black,
        dark: theme.palette.common.black,
        contrastText: theme.palette.common.white,
      },
    }),
    neutralDark: theme.palette.augmentColor({
      color: {
        main: theme.palette.common.white,
        dark: theme.palette.common.white,
        contrastText: theme.palette.common.black,
      },
    }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          fontSize: "1rem",
          textTransform: "none",
        }),
      },
    },
  },
});

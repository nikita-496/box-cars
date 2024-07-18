import { color } from "@/core/config/designTokens/color";
import { font } from "@/core/config/designTokens/font";
import { Color, PaletteColor } from "@mui/material";
import { createTheme, getContrastRatio } from "@mui/material/styles";

declare module "@mui/material/styles" {
  //eslint-disable-next-line
  interface TypographyVariants {
    "body_x0.875": React.CSSProperties;
    "body_x0.875_m": React.CSSProperties;
    "body_x0.9375_sm": React.CSSProperties;
    "body_x0.9375_m": React.CSSProperties;
    "body_x1.125": React.CSSProperties;
    "body_x1.125_m": React.CSSProperties;
    "h_x2.5": React.CSSProperties;
  }
  //eslint-disable-next-line
  interface TypographyVariantsOptions {
    "body_x0.875": React.CSSProperties;
    "body_x0.875_m": React.CSSProperties;
    "body_x0.9375_sm": React.CSSProperties;
    "body_x0.9375_m": React.CSSProperties;
    "body_x1.125": React.CSSProperties;
    "body_x1.125_m": React.CSSProperties;
    "h_x2.5": React.CSSProperties;
  }

  //eslint-disable-next-line
  interface Palette {
    contrastLight: PaletteColor;
    contrastDark: PaletteColor;
    common: Palette["common"];
    primary: Palette["primary"];
    blueLight: PaletteColor;
    blueDark: PaletteColor;
    grey: Color;
  }
  //eslint-disable-next-line
  interface PaletteOptions {
    contrastLight: PaletteColor;
    contrastDark: PaletteColor;
    common?: PaletteOptions["common"];
    primary?: PaletteOptions["primary"];
    blueLight: PaletteColor;
    blueDark: PaletteColor;
    grey?: Partial<Color>;
  }
}

declare module "@mui/material/Typography" {
  //eslint-disable-next-line
  interface TypographyPropsVariantOverrides {
    "body_x0.875": true;
    "body_x0.875_m": true;
    "body_x0.9375_sm": true;
    "body_x0.9375_m": true;
    "body_x1.125": true;
    "body_x1.125_m": true;
    "h_x2.5": true;
  }
}

declare module "@mui/material/Button" {
  //eslint-disable-next-line
  interface ButtonPropsColorOverrides {
    common: true;
    primary: true;
    contrastLight: true;
    contrastDark: true;
    blueLight: true;
    blueDark: true;
    grey: true;
  }
}

export let theme = createTheme({});

theme = createTheme(theme, {
  typography: {
    "body_x0.875": {
      fontSize: font.size["x0.875"],
    },
    "body_x0.875_m": {
      fontSize: font.size["x0.875"],
      lineHeight: "2",
    },
    "body_x0.9375_sm": {
      fontSize: font.size["x0.9375"],
      lineHeight: "1.74",
    },
    "body_x0.9375_m": {
      fontSize: font.size["x0.9375"],
      lineHeight: "1.87",
    },
    "body_x1.125": {
      fontSize: font.size["x1.125"],
    },
    "body_x1.125_m": {
      fontSize: font.size["x1.125"],
      fontWeight: 500,
      lineHeight: "1.333",
    },
    "h_x2.5": {
      fontSize: font.size["x2.5"],
    },
  },
  palette: {
    common: {
      black: color.neutral[900],
      white: color.neutral[50],
    },
    primary: {
      light: color.blue[400],
      main: color.blue[500],
      dark: color.blue[400],
      contrastText:
        getContrastRatio(color.blue[500], "#fff") > 4.5
          ? theme.palette.common.white
          : theme.palette.common.black,
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
    contrastLight: theme.palette.augmentColor({
      color: {
        main: theme.palette.common.white,
        dark: theme.palette.common.black,
        contrastText: theme.palette.common.black,
      },
    }),
    contrastDark: theme.palette.augmentColor({
      color: {
        main: theme.palette.common.black,
        dark: theme.palette.common.white,
        contrastText: theme.palette.common.white,
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
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          fontFamily: font.family["dm-sans"],
        }),
      },
    },
  },
});

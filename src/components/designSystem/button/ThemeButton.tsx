import { Button, Color, CommonColors, PaletteColor } from "@mui/material";
import {
  ButtonProps,
  ButtonPropsColorOverrides,
} from "@mui/material/Button/Button";
import { OverridableStringUnion } from "@mui/types";
import { FC, PropsWithChildren } from "react";

type ThemeButtonProps = {
  color?:
    | OverridableStringUnion<"blueLight", ButtonPropsColorOverrides>
    | undefined;
} & ButtonProps &
  PropsWithChildren;

export const ThemeButton: FC<ThemeButtonProps> = ({
  disableRipple = true,
  disableElevation = true,
  color = "blueLight",
  variant = "contained",
  children,
  ...rest
}) => {
  const getHoverShade = (mainColor: PaletteColor | CommonColors | Color) => {
    if ("dark" in mainColor) {
      return mainColor.dark;
    }
    if ("500" in mainColor) {
      return mainColor[500];
    }
    return mainColor.black;
  };
  const getContextText = (mainColor: PaletteColor | CommonColors | Color) => {
    if ("dark" in mainColor) {
      return mainColor.contrastText;
    }
    if ("500" in mainColor) {
      return mainColor[500];
    }
    return mainColor.white;
  };
  return (
    <Button
      disableRipple={disableRipple}
      disableElevation={disableElevation}
      variant={variant}
      color={color}
      sx={(theme) => {
        const colorValue = theme.palette[color];
        return {
          borderRadius: 3,
          "&.MuiButtonBase-root:hover": {
            transition: "0.5s",
            backgroundColor: getHoverShade(colorValue),
            color: getContextText(colorValue),
          },
        };
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

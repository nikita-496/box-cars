import {
  darken,
  Slider as MUISlider,
  SliderProps as MUISliderProps,
  useTheme,
} from "@mui/material";
import { FC } from "react";

export type SliderProps = MUISliderProps;

export const Slider: FC<SliderProps> = ({ sx, ...rest }) => {
  const theme = useTheme();
  return (
    <MUISlider
      sx={{
        color:
          theme.palette.mode === "dark" ? "#fff" : theme.palette.primary.main,
        "& .MuiSlider-thumb": {
          backgroundColor: "#fff",
          border: `2px solid ${theme.palette.primary.main}`,
          "&::before": {
            boxShadow: "none",
          },
          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "none",
          },
        },
        "& .MuiSlider-rail": {
          color:
            theme.palette.mode === "dark"
              ? "#bfbfbf"
              : darken(theme.palette.common.white, 0.1),
          opacity: theme.palette.mode === "dark" ? undefined : 1,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

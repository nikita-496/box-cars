import { SvgIconProps } from "@mui/material";
import { createElement, FC } from "react";

import { icons } from "@/components/designSystem/icon/icons";

type IconName = keyof typeof icons;

type ThemeIconProps = {
  icon: IconName;
} & SvgIconProps;

export const ThemeIcon: FC<ThemeIconProps> = ({
  icon,
  fill = "#050B20",
  stroke = "white",
  ...props
}) => createElement(icons[icon], { ...props, fill, stroke });

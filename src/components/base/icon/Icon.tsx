import { SvgIconProps } from "@mui/material";
import { createElement, FC } from "react";

import { icons } from "@/components/base/icon/icons";

type IconName = keyof typeof icons;

export type IconProps = {
  icon: IconName;
} & SvgIconProps;

export const Icon: FC<IconProps> = ({
  icon,
  fill = "#050B20",
  stroke = "white",
  ...props
}) => createElement(icons[icon], { ...props, fill, stroke });

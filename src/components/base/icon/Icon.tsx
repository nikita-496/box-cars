import { StyleOperator } from "@/core/types/components/styleOperator.type";
import { Box, SvgIconProps } from "@mui/material";
import { createElement, FC } from "react";

import { icons } from "@/components/base/icon/icons";

export type IconName = keyof typeof icons;

export type IconProps = {
  icon: IconName;
} & SvgIconProps;

export type IconWrapperProps = {
  size?: number;
  sizeOperator?: StyleOperator;
} & IconProps;

export const Icon: FC<IconWrapperProps> = ({
  size = 1,
  sizeOperator = "em",
  ...props
}) => {
  return (
    <Box
      sx={{
        fontSize: `${size}${sizeOperator}`,
      }}
    >
      <IconItem {...props} />
    </Box>
  );
};

const IconItem: FC<IconProps> = ({
  icon,
  fill = "#050B20",
  stroke = "white",
  ...props
}) =>
  createElement(icons[icon], { fontSize: "inherit", fill, stroke, ...props });

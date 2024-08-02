import type { BoxProps } from "@mui/material";

import { Box, useTheme } from "@mui/material";

import type { NavLinkProps } from "@/components/base/navLink";

import { NavLink } from "@/components/base/navLink";

export const NavLinkStyled = ({ color, ...props }: NavLinkProps) => {
  const theme = useTheme();
  const defaultColor =
    color ??
    (theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.common.black);
  return <NavLink color={defaultColor} activeColor={defaultColor} {...props} />;
};

export const TopLinkIconWrapper = (props: BoxProps) => {
  return (
    <Box
      sx={(theme) => ({
        display: "inline-block",
        fontSize: theme.typography["body_x0.875"],
        marginLeft: "0.645em",
      })}
      {...props}
    />
  );
};

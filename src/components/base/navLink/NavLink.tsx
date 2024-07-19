import { useTheme } from "@mui/material";
import { FC } from "react";
import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps,
} from "react-router-dom";

export type NavLinkProps = {
  color?: string;
  activeColor?: string;
  activeBackground?: string;
} & ReactRouterNavLinkProps;

export const NavLink: FC<NavLinkProps> = ({
  color,
  activeColor,
  activeBackground,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const themeColor = color || theme.palette.common.black;
  const themeActiveColor = activeColor || theme.palette.primary.main;
  const themeActiveBackground = activeBackground || '"transparent"';
  return (
    <ReactRouterNavLink
      style={({ isActive }) => ({
        color: isActive ? themeActiveColor : themeColor,
        backgroundColor: isActive ? themeActiveBackground : "transparent",
        textDecoration: "none",
        ...style,
      })}
      {...rest}
    />
  );
};

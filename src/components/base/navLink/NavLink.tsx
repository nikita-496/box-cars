import { FC } from "react";
import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps,
} from "react-router-dom";

export type NavLinkProps = ReactRouterNavLinkProps;

export const NavLink: FC<NavLinkProps> = ({ style, ...rest }) => {
  return (
    <ReactRouterNavLink
      style={{ textDecoration: "none", ...style }}
      {...rest}
    />
  );
};

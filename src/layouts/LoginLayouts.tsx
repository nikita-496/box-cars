import { FC } from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const LoginLayouts: FC = () => {
  return (
    <>
      <NavLink to=".">Sign in</NavLink>
      <NavLink to="register">Register</NavLink>
      <Outlet />
    </>
  );
};

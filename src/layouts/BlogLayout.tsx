import type { FC } from "react";

import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const BlogLayout: FC = () => {
  return (
    <>
      <nav>
        <NavLink to=".">Auto Detailing</NavLink>
        <NavLink to="car-news">Car News</NavLink>
        <NavLink to="buying-guides">Buying Guides</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

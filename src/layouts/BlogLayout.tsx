import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

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

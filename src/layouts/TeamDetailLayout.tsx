import { FC } from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const TeamDetailLayout: FC = () => {
  return (
    <>
      <h2>Team Detail</h2>
      <nav>
        <NavLink to=".">New & Used</NavLink>
        <NavLink to="used-cars">Used Cars</NavLink>
        <NavLink to="in-stock">In Stock</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

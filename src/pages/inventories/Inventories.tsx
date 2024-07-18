import { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const Inventories: FC = () => {
  return (
    <>
      <h2>Inventories</h2>

      <NavLink to="/inventories/1">Inventories detail</NavLink>
    </>
  );
};

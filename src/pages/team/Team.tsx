import type { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const Team: FC = () => {
  return (
    <>
      <h2>Team</h2>
      <NavLink to="/team/1">Team Detail</NavLink>
    </>
  );
};

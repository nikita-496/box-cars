import type { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const DealerList: FC = () => {
  return (
    <>
      <h2>Dealer List</h2>

      <NavLink to="/dealer/1">Dealer Detail</NavLink>
    </>
  );
};

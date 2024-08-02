import type { FC } from "react";

import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const TermsLayout: FC = () => {
  return (
    <>
      <nav>
        <NavLink to=".">Account & Payments</NavLink>
        <NavLink to="manage-orders">Manage Orders</NavLink>
        <NavLink to="returnns-and-refunds">Returns & Refunds</NavLink>
        <NavLink to="covid-19">Covid-19</NavLink>
        <NavLink to="other">Other</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

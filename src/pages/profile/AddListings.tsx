import type { FC } from "react";

import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const AddListings: FC = () => {
  return (
    <>
      <h2>Add Listings</h2>
      <nav>
        <NavLink to=".">Car Details</NavLink>
        <NavLink to="price">Price</NavLink>
        <NavLink to="features">Features</NavLink>
        <NavLink to="media">Media</NavLink>
        <NavLink to="location">Location</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

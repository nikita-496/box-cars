import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

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

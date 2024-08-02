import type { FC } from "react";

import { Outlet } from "react-router-dom";

import { NavLink } from "@/components/base/navLink";

export const ProfileLayout: FC = () => {
  return (
    <>
      <aside>
        <nav>
          <NavLink to=".">Dashboard</NavLink>
          <NavLink to="my-listings">My Listings</NavLink>
          <NavLink to="add-listings">Add Listings</NavLink>
          <NavLink to="favorites">My Favorites</NavLink>
          <NavLink to="saved-searched">Saved Search</NavLink>
          <NavLink to="messages">Messages</NavLink>
          <NavLink to="settings">My Profile</NavLink>
          <NavLink to="/">Logout</NavLink>
        </nav>
      </aside>
      <Outlet />
    </>
  );
};

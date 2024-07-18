import { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inventories">Inventories</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/terms">Terms</NavLink>
        <NavLink to="/dealer">Dealer</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
};

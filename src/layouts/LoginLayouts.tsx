import { FC } from "react";
import { NavLink } from "react-router-dom";

export const LoginLayouts: FC = () => {
  return (
    <>
      <NavLink to=".">Sign in</NavLink>
      <NavLink to="register">Register</NavLink>
    </>
  );
};

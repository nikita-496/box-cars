import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Shop: FC = () => {
  return (
    <>
      <h2>Shop</h2>
      <NavLink to="/shop/1">Shop detail</NavLink>
    </>
  );
};

import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Breadcrumb, BreadcrumbProps } from "@/components/Breadcrumb";

const breadcrumbOptions: BreadcrumbProps = {
  options: [
    { link: "Home", to: "../../", relative: "path" },
    { link: "Shop", to: "../", relative: "path" },
  ],
};

export const ShopDetailLayout: FC = () => {
  return (
    <>
      <Breadcrumb options={breadcrumbOptions.options} />
      <nav>
        <NavLink to=".">Description</NavLink>
        <NavLink to="review">Review</NavLink>
      </nav>
      <h2>Detail</h2>
      <NavLink to="/shop/cart">Go To Cart</NavLink>
      <Outlet />
    </>
  );
};

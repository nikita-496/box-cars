import type { FC } from "react";

import { Outlet } from "react-router-dom";

import type { BreadcrumbProps } from "@/components/designSystem/navigation/Breadcrumb";

import { NavLink } from "@/components/base/navLink";
import { Breadcrumb } from "@/components/designSystem/navigation/Breadcrumb";

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

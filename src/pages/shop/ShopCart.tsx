import { FC } from "react";

import { NavLink } from "@/components/base/navLink";
import {
  Breadcrumb,
  BreadcrumbProps,
} from "@/components/designSystem/navigation/Breadcrumb";

// TODO:  { link: "Shop Detail", to: "/shop/1", relative: "path" },
const breadcrumbOptions: BreadcrumbProps = {
  options: [
    { link: "Home", to: "../../", relative: "path" },
    { link: "Shop", to: "../", relative: "path" },
    { link: "Shop Detail", to: "/shop/1", relative: "path" },
  ],
};

export const ShopCart: FC = () => {
  return (
    <>
      <Breadcrumb options={breadcrumbOptions.options} />
      <h2>Shop Cart</h2>
      <NavLink to="/shop/checkout">Proceed to Checkout</NavLink>
    </>
  );
};

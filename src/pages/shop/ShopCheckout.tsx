import type { FC } from "react";

import type { BreadcrumbProps } from "@/components/designSystem/navigation/Breadcrumb";

import { Breadcrumb } from "@/components/designSystem/navigation/Breadcrumb";

const breadcrumbOptions: BreadcrumbProps = {
  options: [
    { link: "Home", to: "../../", relative: "path" },
    { link: "Shop", to: "../", relative: "path" },
    { link: "Shop Detail", to: "/shop/1", relative: "path" },
    { link: "Shop Cart", to: "/shop/cart", relative: "path" },
  ],
};

export const ShopCheckout: FC = () => {
  return (
    <>
      <Breadcrumb options={breadcrumbOptions.options} />
      <h2>Shop Checkaut</h2>
    </>
  );
};

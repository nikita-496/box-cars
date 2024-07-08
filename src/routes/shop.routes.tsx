import { ShopDetailLayout } from "@/layouts/ShopDetailLayout";

import { Shop } from "@/pages/shop/Shop";
import { ShopCart } from "@/pages/shop/ShopCart";
import { ShopCheckout } from "@/pages/shop/ShopCheckout";
import { ShopDetailDescription } from "@/pages/shop/ShopDetailDescription";
import { ShopDetailReview } from "@/pages/shop/ShopDetailReview";

export const shopRoutes = {
  shop: {
    path: "shop",
    element: <Shop />,
  },
  shopDetail: {
    path: "shop/:shopId",
    element: <ShopDetailLayout />,
    children: [
      {
        index: true,
        element: <ShopDetailDescription />,
      },
      {
        path: "review",
        element: <ShopDetailReview />,
      },
    ],
  },
  shopCart: {
    path: "shop/cart",
    element: <ShopCart />,
  },
  shopCheckout: {
    path: "shop/checkout",
    element: <ShopCheckout />,
  },
};

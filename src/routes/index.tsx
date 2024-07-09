import { Layout } from "@/layouts/Layout";
import { blogsRoutes } from "@/routes/blogs.routes";
import { dealerRoutes } from "@/routes/dealer.routes";
import { inventoriesRoutes } from "@/routes/inventories.routes";
import { loginRoutes } from "@/routes/login.routes";
import { profileRoutes } from "@/routes/profile.routes";
import { shopRoutes } from "@/routes/shop.routes";
import { teamRoutes } from "@/routes/team.routes";
import { termsRoutes } from "@/routes/terms.routes";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { About } from "@/pages/about/About";
import { ContactUs } from "@/pages/contactUs/ContactUs";
import { DesignSystem } from "@/pages/designSystem/DesignSystem";
import { Faq } from "@/pages/faq/Faq";
import { Pricing } from "@/pages/pricing/Pricing";

const { inventories, inventoryDetail } = inventoriesRoutes;
const { shop, shopDetail, shopCart, shopCheckout } = shopRoutes;
const { team, teamDetail } = teamRoutes;
const { dealer, dealerDetail } = dealerRoutes;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      inventories,
      inventoryDetail,
      { ...blogsRoutes },
      shop,
      shopDetail,
      shopCart,
      shopCheckout,
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      team,
      teamDetail,
      termsRoutes,
      dealer,
      dealerDetail,
      loginRoutes,
      profileRoutes,
      {
        path: "design-system",
        element: <DesignSystem />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

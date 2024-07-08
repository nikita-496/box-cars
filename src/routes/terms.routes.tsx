import { TermsLayout } from "@/layouts/TermsLayout";

import { AccoundAndPayments } from "@/pages/terms/AccoundAndPayments";
import { Covid19 } from "@/pages/terms/Covid19";
import { MangaeAndOrders } from "@/pages/terms/MangaeAndOrders";
import { Other } from "@/pages/terms/Other";
import { ReturnsAndRefunds } from "@/pages/terms/ReturnsAndRefunds";

export const termsRoutes = {
  path: "terms",
  element: <TermsLayout />,
  children: [
    {
      index: true,
      element: <AccoundAndPayments />,
    },
    {
      path: "manage-orders",
      element: <MangaeAndOrders />,
    },
    {
      path: "returnns-and-refunds",
      element: <ReturnsAndRefunds />,
    },
    {
      path: "covid-19",
      element: <Covid19 />,
    },
    {
      path: "other",
      element: <Other />,
    },
  ],
};

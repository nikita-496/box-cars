import { DealerDetail } from "@/pages/dealer/DealerDetail";
import { DealerList } from "@/pages/dealer/DealerList";

export const dealerRoutes = {
  dealer: {
    path: "dealer",
    element: <DealerList />,
  },
  dealerDetail: {
    path: "dealer/:dealerId",
    element: <DealerDetail />,
  },
};

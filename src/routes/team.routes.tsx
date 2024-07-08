import { TeamDetailLayout } from "@/layouts/TeamDetailLayout";

import { InStock } from "@/pages/team/InStock";
import { NewsAndUsed } from "@/pages/team/NewsAndUsed";
import { Team } from "@/pages/team/Team";
import { UsedCars } from "@/pages/team/UsedCars";

export const teamRoutes = {
  team: {
    path: "team",
    element: <Team />,
  },
  teamDetail: {
    path: "team/:teamId",
    element: <TeamDetailLayout />,
    children: [
      {
        index: true,
        element: <NewsAndUsed />,
      },
      {
        path: "used-cars",
        element: <UsedCars />,
      },
      {
        path: "in-stock",
        element: <InStock />,
      },
    ],
  },
};

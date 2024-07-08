import { Inventories } from "@/pages/inventories/Inventories";
import { InventoryDetail } from "@/pages/inventories/InventoryDetail";

export const inventoriesRoutes = {
  inventories: {
    path: "inventories",
    element: <Inventories />,
  },
  inventoryDetail: {
    path: "inventories/:inventoryId",
    element: <InventoryDetail />,
  },
};

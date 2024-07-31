import { modelsSlice } from "@/core/modules/models/models.slice";

export { fetchModels } from "@/core/modules/models/fetchModels";
export const { selectAllModels } = modelsSlice.selectors;

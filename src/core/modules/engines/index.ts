import { enginesSlice } from "@/core/modules/engines/engines.slice";

export { fetchOneEngine } from "@/core/modules/engines/fetchOneEngines";

export const { selectAllEngines } = enginesSlice.selectors;

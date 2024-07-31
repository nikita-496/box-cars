import { makesSlice } from "@/core/modules/makes/makes.slice";
export { selectOneMake } from "@/core/modules/makes/selectOneMake";
export { selectPremiumBrands } from "@/core/modules/makes/selectPremiumBrands";
export const { selectBrandsStatus, selectAllMakes, selectMakeId } =
  makesSlice.selectors;
/*
export {
  selectAllMakes,
  selectOneMakes,
} from "@/core/modules/makes/makes.slice";
*/
export { fetchMakes } from "@/core/modules/makes/fetchMakes";

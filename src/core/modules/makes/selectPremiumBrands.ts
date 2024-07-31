import { makesSlice } from "@/core/modules/makes/makes.slice";
import { createSelector } from "@reduxjs/toolkit";

/**
 * The api model does not list premium models.
 * Therefore, we assume that the first six models are premium models
 */
export const selectPremiumBrands = createSelector(
  makesSlice.selectors.selectAllMakes,
  (makes) =>
    makes.slice(0, 6).map((make) => ({
      ...make,
      image: `https://raw.githubusercontent.com/nikita-496/box-cars/redux/src/assets/brands/${make.name}.png`,
    })),
);

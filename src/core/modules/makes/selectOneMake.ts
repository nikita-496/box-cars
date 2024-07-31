import { makesSlice } from "@/core/modules/makes/makes.slice";
import { createSelector } from "@reduxjs/toolkit";

export const selectOneMake = createSelector(
  makesSlice.selectors.selectAllMakes,
  makesSlice.selectors.selectMakeId,
  (makes, makeId) => makes.filter((make) => make.id === makeId)[0],
);

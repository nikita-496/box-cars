import { MakeM } from "@/core/models/make.model";
import { AsyncThunkConfig, RootState } from "@/core/types/store.type";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const FETCH_MAKES = "makes/fetchMakes";

const makesAdapter = createEntityAdapter({
  selectId: (make: MakeM) => make.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const fetchMakes = createAsyncThunk<
  MakeM[],
  undefined,
  AsyncThunkConfig
>(FETCH_MAKES, async (_, { extra }) => {
  const { make } = extra;
  const responseMakes = await make.get();
  return responseMakes.data.data;
});

const makesSlice = createSlice({
  name: "makes",
  initialState: makesAdapter.getInitialState({ status: "idle", error: null }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMakes.fulfilled, makesAdapter.setAll);
  },
});

export default makesSlice.reducer;
export const { selectAll: selectAllMakes, selectById: selectOneMakes } =
  makesAdapter.getSelectors<RootState>((state) => state.makes);

/**
 * The api model does not list premium models.
 * Therefore, we assume that the first six models are premium models
 */
export const selectPremiumBrands = createSelector([selectAllMakes], (makes) =>
  makes.slice(0, 6).map((make) => ({
    ...make,
    image: `https://raw.githubusercontent.com/nikita-496/box-cars/redux/src/assets/brands/${make.name}.png`,
  })),
);

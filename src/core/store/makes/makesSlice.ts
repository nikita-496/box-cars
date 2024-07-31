import { MakeM } from "@/core/models/make.model";
import {
  AsyncThunkConfig,
  InitialState,
  RootState,
} from "@/core/types/store.type";
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

const initialState: InitialState = { status: "idle", error: "" };

export const fetchMakes = createAsyncThunk<
  MakeM[],
  undefined,
  AsyncThunkConfig
>(FETCH_MAKES, async (_, { extra }) => {
  const { make } = extra;
  const response = await make.get();
  return response.data.data;
});

const makesSlice = createSlice({
  name: "makes",
  initialState: makesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMakes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMakes.fulfilled, (state, action) => {
        state.status = "succeeded";
        makesAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchMakes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
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

export const selectPremiumBrandsStatus = createSelector(
  (state: RootState) => state.makes,
  (makes) => makes.status,
);

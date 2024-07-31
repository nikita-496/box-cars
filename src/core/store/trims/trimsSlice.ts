import { TrimM } from "@/core/models/trim.model";
import {
  AsyncThunkConfig,
  InitialState,
  RootState,
} from "@/core/types/store.type";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const FETCH_TRIMS = "trims/fetchTrims";

const trimsAdapter = createEntityAdapter<TrimM>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const fetchOneTrim = createAsyncThunk<TrimM[], string, AsyncThunkConfig>(
  FETCH_TRIMS,
  async (makeModelId, { extra }) => {
    const { trim } = extra;
    const response = await trim.get({
      params: {
        page: 1,
        limit: 1,
        make_model_id: makeModelId,
        year: 2015,
      },
    });
    return response.data.data;
  },
);

const initialState: InitialState = { status: "idle", error: "" };

const trimsSlice = createSlice({
  name: "trims",
  initialState: trimsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOneTrim.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchOneTrim.fulfilled, (state, action) => {
        state.status = "succeeded";
        trimsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchOneTrim.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default trimsSlice.reducer;

export const { selectAll: selectAllTrims, selectById: selectOneTrims } =
  trimsAdapter.getSelectors<RootState>((state) => state.trims);

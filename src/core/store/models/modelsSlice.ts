import { ModelM } from "@/core/models/model.model";
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

const FETCH_MODELS = "models/fetchModels";

const modelsAdpater = createEntityAdapter<ModelM>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

/**
 * This api provides model data from 2015 - 2020 only
 */
export const fetchModels = createAsyncThunk<
  ModelM[],
  undefined,
  AsyncThunkConfig
>(FETCH_MODELS, async (_, { extra }) => {
  const { model } = extra;
  const response = await model.get({
    params: {
      page: 1,
      limit: 3,
      sort: "make_id",
      year: 2015,
    },
  });
  return response.data.data;
});

const initialState: InitialState = { status: "idle", error: "" };

const modelsSlice = createSlice({
  name: "models",
  initialState: modelsAdpater.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchModels.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchModels.fulfilled, (state, action) => {
        state.status = "succeeded";
        modelsAdpater.upsertMany(state, action.payload);
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default modelsSlice.reducer;

export const { selectAll: selectAllModels, selectById: selectOneModels } =
  modelsAdpater.getSelectors<RootState>((state) => state.models);

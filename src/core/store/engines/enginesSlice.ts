import { EngineM } from "@/core/models/engine.model";
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

const FETCH_ENGINES = "engines/fetchEngines";

const enginesAdapter = createEntityAdapter<EngineM>({});

export const fetchOneEngine = createAsyncThunk<
  EngineM[],
  {
    makeModelId: string;
    makeModelTrimId?: string;
  },
  AsyncThunkConfig
>(FETCH_ENGINES, async ({ makeModelTrimId, makeModelId }, { extra }) => {
  const { engine } = extra;
  const response = await engine.get({
    params: {
      make_model_trim_id: makeModelTrimId,
      make_model_id: makeModelId,
      year: 2015,
    },
  });
  return response.data.data;
});

const initialState: InitialState = { status: "idle", error: "" };

const enginesSlice = createSlice({
  name: "engines",
  initialState: enginesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOneEngine.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchOneEngine.fulfilled, (state, action) => {
        state.status = "succeeded";
        enginesAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchOneEngine.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default enginesSlice.reducer;

export const { selectAll: selectAllEngines, selectById: selectOneEngines } =
  enginesAdapter.getSelectors<RootState>((state) => state.engines);

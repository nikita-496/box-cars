import { EngineM } from "@/core/models/engine.model";
import { fetchOneEngine } from "@/core/modules/engines/fetchOneEngines";
import { rootReducer } from "@/core/store";
import { InitialState } from "@/core/types/store.type";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

type EngineId = global.Id;

type State = {
  entities: Record<EngineId, EngineM | undefined>;
  ids: EngineId[];
};

const enginesAdapter = createEntityAdapter<EngineM>({});

const initialState: InitialState = { status: "idle", error: "", entities: {} };

export const enginesSlice = createSlice({
  name: "engines",
  initialState: enginesAdapter.getInitialState(initialState),
  selectors: {
    selectAllEngines: createSelector(
      (state: State) => state.ids,
      (state: State) => state.entities,
      (ids, entities) =>
        ids.map((id) => entities[id]).filter((engine) => !!engine),
    ),
  },
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
}).injectInto(rootReducer);

import { ModelM } from "@/core/models/model.model";
import { fetchModels } from "@/core/modules/models/fetchModels";
import { rootReducer } from "@/core/store";
import { InitialState } from "@/core/types/store.type";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

type ModelId = global.Id;

type State = {
  entities: Record<ModelId, ModelM | undefined>;
  ids: ModelId[];
};

const modelsAdpater = createEntityAdapter<ModelM>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

const initialState: InitialState = { status: "idle", error: "", entities: {} };

export const modelsSlice = createSlice({
  name: "models",
  initialState: modelsAdpater.getInitialState(initialState),
  selectors: {
    selectAllModels: createSelector(
      (state: State) => state.ids,
      (state: State) => state.entities,
      (ids, entities) => ids.map((id) => entities[id]).filter((mode) => !!mode),
    ),
  },
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
}).injectInto(rootReducer);

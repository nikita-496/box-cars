import { TrimM } from "@/core/models/trim.model";
import { fetchOneTrim } from "@/core/modules/trims/fetchOneTrim";
import { rootReducer } from "@/core/store";
import { InitialState } from "@/core/types/store.type";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

type TrimlId = global.Id;

type State = {
  entities: Record<TrimlId, TrimM | undefined>;
  ids: TrimlId[];
};

const trimsAdapter = createEntityAdapter<TrimM>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

const initialState: InitialState = { status: "idle", error: "", entities: {} };

export const trimsSlice = createSlice({
  name: "trims",
  initialState: trimsAdapter.getInitialState(initialState),
  selectors: {
    selectAllTrims: createSelector(
      (state: State) => state.ids,
      (state: State) => state.entities,
      (ids, entities) => ids.map((id) => entities[id]).filter((trim) => !!trim),
    ),
  },
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
}).injectInto(rootReducer);

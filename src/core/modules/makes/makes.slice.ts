import { MakeM } from "@/core/models/make.model";
import { fetchMakes } from "@/core/modules/makes";
import { rootReducer } from "@/core/store";
import { InitialState } from "@/core/types/store.type";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

type MakeId = global.Id;

type State = {
  entities: Record<MakeId, MakeM | undefined>;
  ids: MakeId[];
};

const initialState: InitialState = { status: "idle", error: "", entities: {} };

const makesAdapter = createEntityAdapter<MakeM>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const makesSlice = createSlice({
  name: "makes",
  initialState: makesAdapter.getInitialState(initialState),
  selectors: {
    selectAllMakes: createSelector(
      (state: State) => state.ids,
      (state: State) => state.entities,
      (ids, entities) => ids.map((id) => entities[id]).filter((make) => !!make),
    ),
    selectMakeId: (state, makeId) => makeId,
    selectBrandsStatus: (state) => state.status,
  },
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
}).injectInto(rootReducer);

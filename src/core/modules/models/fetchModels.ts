import { ModelM } from "@/core/models/model.model";
import { AsyncThunkConfig } from "@/core/types/store.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_MODELS = "models/fetchModels";

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

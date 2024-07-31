import { TrimM } from "@/core/models/trim.model";
import { AsyncThunkConfig } from "@/core/types/store.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_TRIMS = "trims/fetchTrims";

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

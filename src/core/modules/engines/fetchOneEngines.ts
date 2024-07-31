import { EngineM } from "@/core/models/engine.model";
import { AsyncThunkConfig } from "@/core/types/store.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_ENGINES = "engines/fetchEngines";

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

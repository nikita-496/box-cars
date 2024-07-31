import { MakeM } from "@/core/models/make.model";
import { AsyncThunkConfig } from "@/core/types/store.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_MAKES = "makes/fetchMakes";

export const fetchMakes = createAsyncThunk<
  MakeM[],
  undefined,
  AsyncThunkConfig
>(FETCH_MAKES, async (_, { extra }) => {
  const { make } = extra;
  const response = await make.get();
  return response.data.data;
});

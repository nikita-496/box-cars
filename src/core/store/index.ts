import {
  BodyService,
  EngineService,
  MakeService,
  ModelService,
  PostService,
  TrimMService,
} from "@/core/services";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineSlices();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          body: new BodyService(),
          make: new MakeService(),
          post: new PostService(),
          model: new ModelService(),
          trim: new TrimMService(),
          engine: new EngineService(),
        },
      },
    }),
});

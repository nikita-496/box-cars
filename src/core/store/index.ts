import {
  BodyService,
  EngineService,
  MakeService,
  MileageService,
  ModelService,
  PostService,
  TrimService,
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
          engine: new EngineService(),
          make: new MakeService(),
          mileage: new MileageService(),
          model: new ModelService(),
          post: new PostService(),
          trim: new TrimService(),
        },
      },
    }),
});

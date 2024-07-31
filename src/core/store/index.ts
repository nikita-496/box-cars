import {
  BodyService,
  EngineService,
  MakeService,
  ModelService,
  PostService,
  TrimMService,
} from "@/core/services";
import enginesSlice from "@/core/store/engines/enginesSlice";
import makesSlice from "@/core/store/makes/makesSlice";
import modelsSlice from "@/core/store/models/modelsSlice";
import trimsSlice from "@/core/store/trims/trimsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    makes: makesSlice,
    models: modelsSlice,
    trims: trimsSlice,
    engines: enginesSlice,
  },
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

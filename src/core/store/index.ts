import { BodyService, MakeService, PostService } from "@/core/services";
import makesSlice from "@/core/store/makes/makesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    makes: makesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          body: new BodyService(),
          make: new MakeService(),
          post: new PostService(),
        },
      },
    }),
});

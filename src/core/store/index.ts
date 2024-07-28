import { BodyService, MakeService, PostService } from "@/core/services";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
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

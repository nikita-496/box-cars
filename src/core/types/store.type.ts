import { BodyService, MakeService, PostService } from "@/core/services";
import { store } from "@/core/store";

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

type ExtraArgument = {
  body: BodyService;
  make: MakeService;
  post: PostService;
};

export type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: ExtraArgument;
};

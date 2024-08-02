import type {
  BodyService,
  EngineService,
  MakeService,
  ModelService,
  PostService,
} from "@/core/services";
import type { TrimService } from "@/core/services/trim.service";
import type { store } from "@/core/store";
import type { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

export type AppStore = typeof store;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = any;
export type AppDispatch = AppStore["dispatch"];

export type ExtraArgument = {
  body: BodyService;
  make: MakeService;
  post: PostService;
  model: ModelService;
  trim: TrimService;
  engine: EngineService;
};

export type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: ExtraArgument;
};

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  ExtraArgument,
  UnknownAction
>;

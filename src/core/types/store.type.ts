import {
  BodyService,
  EngineService,
  MakeService,
  ModelService,
  PostService,
} from "@/core/services";
import { TrimMService } from "@/core/services/trim.service";
import { store } from "@/core/store";

export type AppStore = typeof store;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = any;
export type AppDispatch = AppStore["dispatch"];

export type ExtraArgument = {
  body: BodyService;
  make: MakeService;
  post: PostService;
  model: ModelService;
  trim: TrimMService;
  engine: EngineService;
};

export type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: ExtraArgument;
};

export type InitialState = {
  status: string;
  error: string | undefined;
  entities: object;
};

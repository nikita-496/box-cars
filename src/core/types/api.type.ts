import { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Service {
    export type Function<
      TModel extends object,
      TResponse extends API.Response<TModel>,
    > = (request: API.Options<TModel>) => Promise<AxiosResponse<TResponse>>;
  }
  export type Response<TModel> = {
    status: number;
    data: TModel[];
  };
  export type Options<TModel> = {
    id: global.Id;
    params: object;
    payload: TModel | undefined;
  };
}

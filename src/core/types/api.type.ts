import { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Service {
    export type Function<
      TModel extends object,
      TResponse extends API.Response<TModel>,
    > = (request: API.Options) => Promise<AxiosResponse<TResponse>>;
    export type GetFunction<
      TModel extends object,
      TResponse extends API.Response<TModel>,
    > = (request?: API.GetOptions) => Promise<AxiosResponse<TResponse>>;
    export type PostFunction<
      TModel extends object,
      TResponse extends API.Response<TModel>,
    > = (request: API.PostOptions<TModel>) => Promise<AxiosResponse<TResponse>>;
    export type PutFunction<
      TModel extends object,
      TResponse extends API.Response<TModel>,
    > = (request: API.PutOptions<TModel>) => Promise<AxiosResponse<TResponse>>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Auth {
    export type AuthResonse = {
      access: string;
      accessExp: string;
      refresh: string;
      refreshExp: string;
    };
    export type LoginCredentials = {
      password: string;
      email: string;
    };
    export type RefreshCredentials = {
      refresh: string;
    };
  }
  export type Response<TModel> = {
    status: number;
    data: TModel[];
  };
  export type Options = {
    id: global.Id;
  };
  export type GetOptions = {
    params: object;
  };
  export type PostOptions<TModel> = {
    payload: TModel;
  };
  export type PutOptions<TModel> = PostOptions<TModel> & Options;
}

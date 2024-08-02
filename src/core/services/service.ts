import type { API } from "@/core/types/api.type";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

import { apiRoutes } from "@/core/config/routes.config";
import axios from "axios";

interface IService<
  TModel extends object,
  TResponse extends API.Response<TModel>,
> {
  get: API.Service.GetFunction<TModel, TResponse>;
  getOne: API.Service.Function<TModel, TResponse>;
  post: API.Service.PostFunction<TModel, TResponse>;
  put: API.Service.PutFunction<TModel, TResponse>;
  delete: API.Service.Function<TModel, TResponse>;
}

export class Service<
  TModel extends object,
  TResponse extends API.Response<TModel>,
> implements IService<TModel, TResponse>
{
  protected endpoint: string = "";
  protected baseApi: AxiosInstance = axios;
  get = ({ params }: API.GetOptions = { params: {} }) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.get(this.endpoint),
      method: "get",
      params: params,
    };
    return this.baseApi(config);
  };
  getOne = ({ id }: API.Options) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.getOne(this.endpoint, id),
      method: "get",
    };
    return this.baseApi(config);
  };
  post = ({ payload }: API.PostOptions<TModel>) => {
    const config: AxiosRequestConfig<TModel> = {
      url: apiRoutes.post(this.endpoint),
      data: payload,
      method: "post",
    };
    return this.baseApi(config);
  };
  put = ({ id, payload }: API.PutOptions<TModel>) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.put(this.endpoint, id),
      data: payload,
      method: "put",
    };
    return this.baseApi(config);
  };
  delete = ({ id }: API.Options) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.delete(this.endpoint, id),
      method: "delete",
    };
    return this.baseApi(config);
  };
}

import { apiRoutes } from "@/core/config/routes.config";
import { API } from "@/core/types/api.type";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IService<
  TModel extends object,
  TResponse extends API.Response<TModel>,
> {
  get: API.Service.Function<TModel, TResponse>;
  getOne: API.Service.Function<TModel, TResponse>;
  post: API.Service.Function<TModel, TResponse>;
  put: API.Service.Function<TModel, TResponse>;
  delete: API.Service.Function<TModel, TResponse>;
}

export class Service<
  TModel extends object,
  TResponse extends API.Response<TModel>,
> implements IService<TModel, TResponse>
{
  protected endpoint: string = "";
  protected baseApi: AxiosInstance = axios;
  get = ({ params }: API.Options<TModel>) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.get(this.endpoint),
      method: "get",
      params,
    };
    return this.baseApi(config);
  };
  getOne = ({ id }: API.Options<TModel>) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.getOne(this.endpoint, id),
      method: "get",
    };
    return this.baseApi(config);
  };
  post = ({ payload }: API.Options<TModel>) => {
    const config: AxiosRequestConfig<TModel> = {
      url: apiRoutes.post(this.endpoint),
      data: payload,
      method: "post",
    };
    return this.baseApi(config);
  };
  put = ({ id, payload }: API.Options<TModel>) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.put(this.endpoint, id),
      data: payload,
      method: "put",
    };
    return this.baseApi(config);
  };
  delete = ({ id }: API.Options<TModel>) => {
    const config: AxiosRequestConfig = {
      url: apiRoutes.delete(this.endpoint, id),
      method: "delete",
    };
    return this.baseApi(config);
  };
}

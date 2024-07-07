import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IHttpClient {
  get: () => Promise<AxiosResponse>;
  post: () => Promise<AxiosResponse>;
  put: () => Promise<AxiosResponse>;
  patch: () => Promise<AxiosResponse>;
  delete: () => Promise<AxiosResponse>;
}

export class HttpClient<
  TRequest extends object | undefined,
  TResponse extends Array<object>,
> implements IHttpClient
{
  protected requestConfig: AxiosRequestConfig<TRequest>;
  constructor(requestConfigValue: AxiosRequestConfig<TRequest>) {
    this.requestConfig = requestConfigValue;
  }
  async get() {
    const response = await axios<TResponse>({
      ...this.requestConfig,
      method: "GET",
    });
    return response;
  }
  async post() {
    const response = await axios({
      ...this.requestConfig,
      method: "POST",
    });
    return response;
  }
  async put() {
    const response = await axios({
      ...this.requestConfig,
      method: "PUT",
    });
    return response;
  }
  async patch() {
    const response = await axios({
      ...this.requestConfig,
      method: "PATCH",
    });
    return response;
  }
  async delete() {
    const response = await axios({
      ...this.requestConfig,
      method: "DELETE",
    });
    return response;
  }
}

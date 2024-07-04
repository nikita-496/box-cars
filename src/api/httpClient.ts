import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface IHttpClient {
  get: () => Promise<AxiosResponse>;
  post: () => Promise<AxiosResponse>;
  put: () => Promise<AxiosResponse>;
  patch: () => Promise<AxiosResponse>;
  delete: () => Promise<AxiosResponse>;
}

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const baseApiClient = axios.create({});
baseApiClient.defaults.headers.get["x-rapidapi-key"] = import.meta.env[
  "VITE_PUBLIC_API_KEY"
];
baseApiClient.defaults.headers.get["x-rapidapi-host"] = import.meta.env[
  "VITE_PUBLIC_API_HOST"
];

export class HttpClient<
  RequestData extends object | undefined,
  Response extends Array<object>,
> implements IHttpClient
{
  protected requestConfig: AxiosRequestConfig<RequestData>;
  constructor(requestConfigValue: AxiosRequestConfig<RequestData>) {
    this.requestConfig = requestConfigValue;
  }
  async get() {
    const response = await baseApiClient<Response>({
      ...this.requestConfig,
      method: "GET",
    });
    return response;
  }
  async post() {
    const response = await baseApiClient({
      ...this.requestConfig,
      method: "POST",
    });
    return response;
  }
  async put() {
    const response = await baseApiClient({
      ...this.requestConfig,
      method: "PUT",
    });
    return response;
  }
  async patch() {
    const response = await baseApiClient({
      ...this.requestConfig,
      method: "PATCH",
    });
    return response;
  }
  async delete() {
    const response = await baseApiClient({
      ...this.requestConfig,
      method: "DELETE",
    });
    return response;
  }
}

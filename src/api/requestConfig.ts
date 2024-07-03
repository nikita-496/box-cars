import { GetOptionsRequest } from "@/api/request.type";

interface IRequestConfig<
  Request extends object,
  Response extends Array<object>,
> {
  get: () => GetOptionsRequest<Request, Response>;
}

const BASE_PUBLIC_API_URL = `${import.meta.env["VITE_BASE_PUBLIC_API_URL"]}/api`;
const BASE_PRIVATE_API_URL = `${import.meta.env["VITE_BASE_PRIVATE_API_URL"]}/api`;

class RequestConfig<Request extends object, Response extends Array<object>>
  implements IRequestConfig<Request, Response>
{
  private request: GetOptionsRequest<Request, Response> = {
    url: "",
    params: <Request>{},
  };

  constructor(params: Request, url: string) {
    this.request = {
      ...this.request,
      url,
      params,
    };
  }

  get() {
    return this.request;
  }
}

export class PublicRequestConfig<
  Request extends object,
  Response extends Array<object>,
> extends RequestConfig<Request, Response> {
  constructor(request: Request, endPoint: string) {
    const baseUrl: string = BASE_PUBLIC_API_URL;
    super(request, baseUrl + endPoint);
  }
}

export class PrivateRequestConfig<
  Request extends object,
  Response extends Array<object>,
> extends RequestConfig<Request, Response> {
  constructor(request: Request, endPoint: string) {
    const baseUrl: string = BASE_PRIVATE_API_URL;
    super(request, baseUrl + endPoint);
  }
}

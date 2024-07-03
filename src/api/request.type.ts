type DTO<D extends object> = D;
type Params<P extends object> = P;

type TransformRequestFunction<Request extends object> = (
  data: DTO<Request>,
  headers: {
    [key: string]: string;
  },
) => string | Buffer | ArrayBuffer | Request;
type TransformRequest<Request extends object> = Array<
  TransformRequestFunction<Request>
>;

type TransformResponseFunction<Response extends Array<object>> = (
  data: Response,
) => string | Response;
type TransformResponse<Response extends Array<object>> = Array<
  TransformResponseFunction<Response>
>;

type OptionsRequest = {
  url: string;
};

export type GetOptionsRequest<
  Request extends object,
  Response extends Array<object>,
> = {
  params?: Params<Request>;
  transformResponse?: TransformResponse<Response>;
} & OptionsRequest;

export type ModifyingOptionsRequest<Request extends object> = {
  transformRequest: TransformRequest<Request>;
  data: DTO<Request>;
} & OptionsRequest;

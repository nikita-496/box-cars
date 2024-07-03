import { HttpClient } from "@/api/httpClient";
import { GetOptionsRequest } from "@/api/request.type";
import { PublicRequestConfig } from "@/api/requestConfig";
import { BodiesResponse } from "@/api/response.type";
import { DIRECTION, LIMIT, PAGE, SORT, VERBOSE } from "@/constants/queryParams";

const BODIES_END_POINT = "/bodies";

type GetQueryParams = {
  make_id: global.Id;
  trim: string;
  make_model_trim_id: string;
  make_model_id: string;
  model: string;
  verbose: string;
  make: string;
  year: string;
  doors: string;
} & global.QueryParams;

export class BodiesService {
  async getAllBodies(
    payload: GetQueryParams = {
      direction: DIRECTION,
      doors: "",
      limit: LIMIT,
      make: "",
      make_id: "",
      make_model_id: "",
      make_model_trim_id: "",
      model: "",
      sort: SORT,
      trim: "",
      verbose: VERBOSE,
      year: "",
      page: PAGE,
    },
  ): Promise<BodiesResponse> {
    const publicRequestConfig = new PublicRequestConfig<
      GetQueryParams,
      BodiesResponse
    >(payload, BODIES_END_POINT);
    const request = publicRequestConfig.get();
    const httpClient = new HttpClient<
      GetOptionsRequest<GetQueryParams, BodiesResponse>,
      BodiesResponse
    >(request);
    const bodiesResponse = await httpClient.get();
    return bodiesResponse.data;
  }
}

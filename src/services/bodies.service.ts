import { ClientStorage } from "@/api/clientStorage";
import { HttpClient } from "@/api/httpClient";
import { BodiesResponse } from "@/api/response.type";
import { DIRECTION, LIMIT, PAGE, SORT, VERBOSE } from "@/constants/queryParams";
import { AxiosRequestConfig } from "axios";

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
    const clientStorage = new ClientStorage();
    const requestConfig: AxiosRequestConfig = {
      url: clientStorage.cardApi2PUrl + BODIES_END_POINT,
      params: payload,
    };
    const httpClient = new HttpClient<undefined, BodiesResponse>(requestConfig);
    const bodiesResponse = await httpClient.get();
    return bodiesResponse.data;
  }
}

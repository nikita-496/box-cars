import { HttpClient } from "@/api/httpClient";
import { GetOptionsRequest } from "@/api/request.type";
import { PublicRequestConfig } from "@/api/requestConfig";
import { MakesResponse } from "@/api/response.type";
import { DIRECTION, LIMIT, PAGE, SORT } from "@/constants/queryParams";

const MAKES_END_POINT = "/makes";

type GetQueryParams = {
  make: string;
} & global.QueryParams;

export class MakesService {
  async getAllMakes(
    payload: GetQueryParams = {
      direction: DIRECTION,
      make: "",
      sort: SORT,
      limit: LIMIT,
      page: PAGE,
    },
  ): Promise<MakesResponse> {
    const publicRequestConfig = new PublicRequestConfig<
      GetQueryParams,
      MakesResponse
    >(payload, MAKES_END_POINT);
    const request = publicRequestConfig.get();
    const httpClient = new HttpClient<
      GetOptionsRequest<GetQueryParams, MakesResponse>,
      MakesResponse
    >(request);
    const makesResponse = await httpClient.get();
    return makesResponse.data;
  }
}

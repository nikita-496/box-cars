import { ClientStorage } from "@/api/clientStorage";
import { HttpClient } from "@/api/httpClient";
import { MakesResponse } from "@/api/response.type";
import { DIRECTION, LIMIT, PAGE, SORT } from "@/constants/queryParams";
import { AxiosRequestConfig } from "axios";

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
    const clientStorage = new ClientStorage();
    const requestConfig: AxiosRequestConfig = {
      url: clientStorage.cardApi2PUrl + MAKES_END_POINT,
      params: payload,
    };
    const httpClient = new HttpClient<undefined, MakesResponse>(requestConfig);
    const makesResponse = await httpClient.get();
    return makesResponse.data;
  }
}

import { baseCarApiClient } from "@/api/clients";
import { MakeM } from "@/core/models/make.model";
import { Service } from "@/core/services";
import { API } from "@/core/types/api.type";

export class MakeService extends Service<MakeM, API.Response<MakeM>> {
  constructor() {
    super();
    this.endpoint = "/makes";
    this.baseApi = baseCarApiClient;
  }
}

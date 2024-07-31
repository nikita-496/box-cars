import { baseCarApiClient } from "@/api/clients";
import { TrimM } from "@/core/models/trim.model";
import { Service } from "@/core/services/service";
import { API } from "@/core/types/api.type";

export class TrimMService extends Service<TrimM, API.Response<TrimM>> {
  constructor() {
    super();
    this.endpoint = "/trims";
    this.baseApi = baseCarApiClient;
  }
}

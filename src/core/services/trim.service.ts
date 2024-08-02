import type { TrimM } from "@/core/models/trim";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class TrimService extends Service<TrimM, API.Response<TrimM>> {
  constructor() {
    super();
    this.endpoint = "/trims";
    this.baseApi = baseCarApiClient;
  }
}

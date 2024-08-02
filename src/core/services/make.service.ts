import type { Make } from "@/core/modules/makes/model/domain";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class MakeService extends Service<Make, API.Response<Make>> {
  constructor() {
    super();
    this.endpoint = "/makes";
    this.baseApi = baseCarApiClient;
  }
}

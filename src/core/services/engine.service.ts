import type { EngineM } from "@/core/models/engine";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class EngineService extends Service<EngineM, API.Response<EngineM>> {
  constructor() {
    super();
    this.endpoint = "/engines";
    this.baseApi = baseCarApiClient;
  }
}

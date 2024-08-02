import type { BodyM } from "@/core/models/body";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class BodyService extends Service<BodyM, API.Response<BodyM>> {
  constructor() {
    super();
    this.endpoint = "/bodies";
    this.baseApi = baseCarApiClient;
  }
}

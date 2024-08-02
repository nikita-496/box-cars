import type { Model } from "@/core/modules/models/api";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class ModelService extends Service<Model, API.Response<Model>> {
  constructor() {
    super();
    this.endpoint = "/models";
    this.baseApi = baseCarApiClient;
  }
}
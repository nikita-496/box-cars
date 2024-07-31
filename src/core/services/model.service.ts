import { baseCarApiClient } from "@/api/clients";
import { ModelM } from "@/core/models/model.model";
import { Service } from "@/core/services/service";
import { API } from "@/core/types/api.type";

export class ModelService extends Service<ModelM, API.Response<ModelM>> {
  constructor() {
    super();
    this.endpoint = "/models";
    this.baseApi = baseCarApiClient;
  }
}

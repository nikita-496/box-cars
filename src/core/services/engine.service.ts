import { baseCarApiClient } from "@/api/clients";
import { EngineM } from "@/core/models/engine.model";
import { Service } from "@/core/services/service";
import { API } from "@/core/types/api.type";

export class EngineService extends Service<EngineM, API.Response<EngineM>> {
  constructor() {
    super();
    this.endpoint = "/engines";
    this.baseApi = baseCarApiClient;
  }
}

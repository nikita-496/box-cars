import { baseCarApiClient } from "@/api/clients";
import { BodyM } from "@/core/models/body.model";
import { Service } from "@/core/services";
import { API } from "@/core/types/api.type";

export class BodyService extends Service<BodyM, API.Response<BodyM>> {
  constructor() {
    super();
    this.endpoint = "/bodies";
    this.baseApi = baseCarApiClient;
  }
}

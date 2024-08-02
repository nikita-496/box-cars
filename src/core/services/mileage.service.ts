import type { Mileage } from "@/core/modules/mileage";
import type { API } from "@/core/types/api.type";

import { baseCarApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class MileageService extends Service<Mileage, API.Response<Mileage>> {
  constructor() {
    super();
    this.endpoint = "/mileages";
    this.baseApi = baseCarApiClient;
  }
}

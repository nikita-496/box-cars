import type { PostM } from "@/core/models/post";
import type { API } from "@/core/types/api.type";

import { baseApiClient } from "@/api/clients";
import { Service } from "@/core/services/service";

export class PostService extends Service<PostM, API.Response<PostM>> {
  constructor() {
    super();
    this.endpoint = "/posts";
    this.baseApi = baseApiClient;
  }
}

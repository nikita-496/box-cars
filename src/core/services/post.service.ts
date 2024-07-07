import { baseApiClient } from "@/api/clients";
import { PostM } from "@/core/models/post.model";
import { Service } from "@/core/services";
import { API } from "@/core/types/api.type";

export class PostService extends Service<PostM, API.Response<PostM>> {
  constructor() {
    super();
    this.endpoint = "/posts";
    this.baseApi = baseApiClient;
  }
}

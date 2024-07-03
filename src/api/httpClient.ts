import { basePublicApiClients } from "@/api/clients";

export class HttpClient<
  Request extends object,
  Response extends Array<object>,
> {
  private options: Request;
  constructor(optionsValue: Request) {
    this.options = optionsValue;
  }
  async get() {
    const response = await basePublicApiClients<Response>({
      ...this.options,
      method: "GET",
    });
    return response;
  }
  async post() {
    await basePublicApiClients({ ...this.options, method: "POST" });
  }
  async put() {
    await basePublicApiClients({ ...this.options, method: "PUT" });
  }
  async patch() {
    await basePublicApiClients({ ...this.options, method: "PATCH" });
  }
  async delete() {
    await basePublicApiClients({ ...this.options, method: "DELETE" });
  }
}

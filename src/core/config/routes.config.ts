export const apiRoutes = {
  get: (endpoint: string) => endpoint,
  getOne: (endpoint: string, id: string) => endpoint + "/" + id,
  post: (endpoint: string) => endpoint,
  put: (endpoint: string, id: string) => endpoint + "/" + id,
  delete: (endpoint: string, id: string) => endpoint + "/" + id,
  search: (endpoint: string, param: string) => endpoint + param,
};

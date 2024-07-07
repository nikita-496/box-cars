import {
  baseCarServerUrl,
  baseServerUrl,
  carApiHeaders,
  routesPrefix,
} from "@/core/config/api.config";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const baseApiClient = axios.create({
  baseURL: baseServerUrl,
});

export const baseCarApiClient = axios.create({
  baseURL: `${baseCarServerUrl}${routesPrefix}`,
});
baseCarApiClient.defaults.headers["x-rapidapi-host"] =
  carApiHeaders["x-rapidapi-host"];
baseCarApiClient.defaults.headers["x-rapidapi-key"] =
  carApiHeaders["x-rapidapi-key"];

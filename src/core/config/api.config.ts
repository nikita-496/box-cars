export const baseServerUrl = import.meta.env["VITE_BASE_SERVER_URL"];
export const baseCarServerUrl = import.meta.env["VITE_BASE_CAR_SERVER_URL"];

export const routesPrefix = "/api";

export const AUTH_END_POINT = "/auth";

export const carApiHeaders = {
  ["x-rapidapi-key"]: import.meta.env["VITE_CAR_API_KEY"],
  ["x-rapidapi-host"]: import.meta.env["VITE_CAR_API_HOST"],
};

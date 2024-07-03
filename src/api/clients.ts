import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const basePublicApiClients = axios.create({});
basePublicApiClients.defaults.headers.get["x-rapidapi-key"] = import.meta.env[
  "VITE_PUBLIC_API_KEY"
];
basePublicApiClients.defaults.headers.get["x-rapidapi-host"] = import.meta.env[
  "VITE_PUBLIC_API_HOST"
];

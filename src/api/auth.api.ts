import type { API } from "@/core/types/api.type";

import { AUTH_END_POINT } from "@/core/config/api.config";
import axios from "axios";

/**
 * 
 Now the authorization service (API) has not been developed. 
 If there is a ready API client, 
 you can implement it or wait until authorization is ready in existing clients for the current version
 */

export const refresh = (payload: API.Auth.RefreshCredentials) =>
  axios.post<API.Auth.AuthResonse>(AUTH_END_POINT + "/refresh", payload);

export const login = (payload: API.Auth.LoginCredentials) =>
  axios.post<API.Auth.AuthResonse>(AUTH_END_POINT + "/login", payload);

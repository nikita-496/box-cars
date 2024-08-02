import { refresh } from "@/api/auth.api";
import { AUTH_END_POINT } from "@/core/config/api.config";
import { authStorage } from "@/core/libs/localStorage";
import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";

const isExpired = (date: string) => {
  try {
    const now = Date.now();
    const toDate = Date.parse(date);
    return now > toDate;
  } catch (error) {
    return true;
  }
};

export const authRequestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  let authData = authStorage.get();
  if (authData && isExpired(authData.access)) {
    if (isExpired(authData.refresh)) {
      authStorage.clear();
      authStorage.set(authData);
    } else {
      await refresh({
        refresh: authData.refresh,
      })
        .then((response) => {
          authData = response.data;
          authStorage.set(authData);
        })
        .catch(() => {
          authStorage.clear();
          authData = undefined;
        });
    }
  }
  if (authData?.access) {
    config.headers["Authorization"] = `Bearer ${authData.access}`;
  }
  return config;
};
export const authResponseInterceptor = async (error: AxiosError) => {
  const status = error.request ? error.response?.status : null;
  if (status === 401) {
    const refreshToken = authStorage.get();
    const { data } = await axios.post(AUTH_END_POINT + "/refresh", {
      token: refreshToken,
    });
    authStorage.set(data);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    return axios(error.config as InternalAxiosRequestConfig);
  }
  return Promise.reject(error);
};

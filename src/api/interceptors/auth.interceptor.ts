import { refresh } from "@/api/auth.api";
import { authStorage } from "@/core/libs/localStorage";
import { InternalAxiosRequestConfig } from "axios";

const isExpired = (date: string) => {
  try {
    const now = Date.now();
    const toDate = Date.parse(date);
    return now > toDate;
  } catch (error) {
    return true;
  }
};

export const authRequestauthInterceptor = async (
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

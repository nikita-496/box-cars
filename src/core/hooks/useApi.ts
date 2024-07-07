import { apiReducer } from "@/core/reducers/apiReducer";
import { API } from "@/core/types/api.type";
import { useEffect, useReducer } from "react";

export function useApi<
  TServiceFunction extends API.Service.Function<TModel, API.Response<TModel>>,
  TModel extends object,
>(
  service: TServiceFunction,
  request: API.Options<TModel> = {
    id: "",
    params: {},
    payload: undefined,
  },
) {
  const [result, dispatch] = useReducer(apiReducer, {
    status: "idle",
    data: {},
    error: null,
  });

  useEffect(() => {
    dispatch({
      type: "error",
      error: new Error("Error"),
    });
    dispatch({ type: "start" });
    service(request)
      .then((response) => dispatch({ type: "success", data: response.data }))
      .catch(() => dispatch({ type: "error", error: new Error("Error") }));
  }, []);

  return result;
}

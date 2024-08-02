import { theme } from "@/core/config/themes.config";
import { store } from "@/core/store";
import { router } from "@/routes";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./index.css";

export const queryClient = new QueryClient({
  /**
   * for development because of the limit on requests
   */
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);

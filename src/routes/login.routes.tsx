import { LoginLayouts } from "@/layouts/LoginLayouts";

import { SignIn } from "@/pages/login/SignIn";
import { SignUp } from "@/pages/login/SignUp";

export const loginRoutes = {
  path: "login",
  element: <LoginLayouts />,
  children: [
    {
      index: true,
      element: <SignIn />,
    },
    {
      path: "register",
      element: <SignUp />,
    },
  ],
};

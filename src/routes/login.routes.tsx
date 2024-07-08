import { LoginLayouts } from "@/layouts/LoginLayouts";

import { SignIn } from "@/pages/login/SignIn";
import { SignUp } from "@/pages/login/SignUp";

export const loginRoutes = {
  path: "login",
  element: <LoginLayouts />,
  children: [
    {
      index: true,
      elements: <SignIn />,
    },
    {
      path: "register",
      elements: <SignUp />,
    },
  ],
};

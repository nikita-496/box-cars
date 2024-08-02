import type { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const NotFound: FC = () => {
  return (
    <>
      <h2>Oops! It looks like you're lost.</h2>
      <p>
        The page you're looking for isn't available. Try to search again or use
        the go to.
      </p>
      <NavLink to="/">Go back to home</NavLink>
    </>
  );
};

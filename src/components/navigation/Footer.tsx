import { FC } from "react";

import { NavLink } from "@/components/base/navLink";

export const Footer: FC = () => {
  return (
    <footer>
      <span>
        &#169;
        <NavLink to="/">2024 Boxcars.com. All rights reserved.</NavLink>
      </span>
    </footer>
  );
};

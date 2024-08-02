import type { FC } from "react";
import type { RelativeRoutingType } from "react-router-dom";

import { createUuid } from "@/core/utils/createUuid";

import { NavLink } from "@/components/base/navLink/NavLink";

export type BreadcrumbProps = {
  options: {
    link: string;
    to: string;
    relative?: RelativeRoutingType;
  }[];
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ options }) => {
  return (
    <nav>
      {options.map((option) => (
        <NavLink key={createUuid()} to={option.to} relative={option.relative}>
          {option.link}
        </NavLink>
      ))}
    </nav>
  );
};

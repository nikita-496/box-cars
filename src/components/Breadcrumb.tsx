import { createUuid } from "@/core/utils/createUuid";
import { FC } from "react";
import { NavLink, RelativeRoutingType } from "react-router-dom";

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

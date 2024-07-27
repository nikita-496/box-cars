import React, { FC } from "react";

import { Icon } from "@/components/base/icon";
import {
  TopLinkIconWrapper,
  NavLinkStyled,
} from "@/components/navigation/sectionLinks.styles";

export type ArrowOutwardLinkProps = {
  label: string;
  url: string;
  color?: string;
  style?: React.CSSProperties;
};

export const ArrowOutwardLink: FC<ArrowOutwardLinkProps> = ({
  url,
  label,
  color,
  style,
}) => {
  return (
    <NavLinkStyled to={url} color={color} style={style}>
      {label}
      <TopLinkIconWrapper>
        <Icon icon="ArrowOutward" fontSize="inherit" fill={color} />
      </TopLinkIconWrapper>
    </NavLinkStyled>
  );
};

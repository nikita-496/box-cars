import type { SxProps } from "@mui/system";
import type { FC } from "react";
import type React from "react";

import { CardWrapper } from "@/components/base/elements";

export type CardProps = {
  cardToolbarSlot?: React.ReactNode;
  cardMediaSlot?: React.ReactNode;
  cardContentSlot?: React.ReactNode;
  sx?: SxProps;
};

export const Card: FC<CardProps> = ({
  cardToolbarSlot,
  cardMediaSlot,
  cardContentSlot,
  sx,
}) => {
  return (
    <CardWrapper sx={{ maxWidth: 345, position: "relative", ...sx }}>
      {cardToolbarSlot}
      {cardMediaSlot}
      {cardContentSlot}
    </CardWrapper>
  );
};

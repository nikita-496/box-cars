import React, { FC } from "react";

import { CardWrapper } from "@/components/base/elements";

type CardProps = {
  cardToolbarSlot?: React.ReactNode;
  cardMediaSlot?: React.ReactNode;
  cardContentSlot?: React.ReactNode;
};

export const Card: FC<CardProps> = ({
  cardToolbarSlot,
  cardMediaSlot,
  cardContentSlot,
}) => {
  return (
    <CardWrapper sx={{ maxWidth: 345, position: "relative" }}>
      {cardToolbarSlot}
      {cardMediaSlot}
      {cardContentSlot}
    </CardWrapper>
  );
};

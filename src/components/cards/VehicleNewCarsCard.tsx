import { useAppSelector } from "@/core/hooks/useAppSelector";
import { selectAllModels } from "@/core/modules/models";
import { FC } from "react";

import VehicleCardImage from "@/assets/car-1.jpg";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import { CardWrapper } from "@/components/cards/card.styles";
import { VehicleCardStyled } from "@/components/cards/vehicleCard.styles";
import { VehicleCardContentSlot } from "@/components/slots/VehicleCardContentSlot";
import { VehicleCardToolbarSlot } from "@/components/slots/VehicleCardToolbarSlot";

export const VehicleNewCarsCard: FC = () => {
  const models = useAppSelector(selectAllModels);

  return (
    <CardWrapper>
      {models.map((model) => (
        <VehicleCardStyled
          key={model.id}
          cardMediaSlot={
            <ZoomInCardMedia media={VehicleCardImage} height={22.109} />
          }
          cardContentSlot={<VehicleCardContentSlot model={model} />}
          cardToolbarSlot={<VehicleCardToolbarSlot />}
        />
      ))}
    </CardWrapper>
  );
};

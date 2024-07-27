import { FC } from "react";

import VehicleCardImage from "@/assets/car-1.jpg";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import { CardWrapper } from "@/components/cards/card.styles";
import { VehicleCardStyled } from "@/components/cards/vehicleCard.styles";
import { VehicleCardContentSlot } from "@/components/slots/VehicleCardContentSlot";
import { VehicleCardToolbarSlot } from "@/components/slots/VehicleCardToolbarSlot";

export const VehicleCard: FC = () => {
  return (
    <CardWrapper>
      <VehicleCardStyled
        cardMediaSlot={
          <ZoomInCardMedia media={VehicleCardImage} height={22.109} />
        }
        cardContentSlot={<VehicleCardContentSlot />}
        cardToolbarSlot={<VehicleCardToolbarSlot />}
      />

      <VehicleCardStyled
        cardMediaSlot={
          <ZoomInCardMedia media={VehicleCardImage} height={22.109} />
        }
        cardContentSlot={<VehicleCardContentSlot />}
        cardToolbarSlot={<VehicleCardToolbarSlot />}
      />

      <VehicleCardStyled
        cardMediaSlot={
          <ZoomInCardMedia media={VehicleCardImage} height={22.109} />
        }
        cardContentSlot={<VehicleCardContentSlot />}
        cardToolbarSlot={<VehicleCardToolbarSlot />}
      />
    </CardWrapper>
  );
};

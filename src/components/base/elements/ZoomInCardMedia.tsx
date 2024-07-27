import { StyleOperator } from "@/core/types/components/styleOperator.type";
import { CardMedia, SxProps } from "@mui/material";
import React, { FC } from "react";

export type ZoomInCardMediaProps = {
  media?: string;
  width?: number | "auto";
  height?: number | "auto";
  widthOperator?: StyleOperator;
  heightOperator?: StyleOperator;
  styleRoot?: React.CSSProperties;
  sx?: SxProps;
};

export const ZoomInCardMedia: FC<ZoomInCardMediaProps> = ({
  media,
  width = 100,
  height = "auto",
  widthOperator = "%",
  heightOperator = "em",
  styleRoot,
  sx,
}) => {
  return (
    <div
      style={{
        width: `${width}${widthOperator}`,
        height: `${height}${heightOperator}`,
        overflow: "hidden",
        borderRadius: "8px",
        ...styleRoot,
      }}
    >
      <CardMedia
        component="img"
        image={media}
        sx={{
          p: 0,
          m: 0,
          transition: "all 0.3s ease",
          height: "100%",
          "&:hover": { transform: "scale(1.1)" },
          ...sx,
        }}
      />
    </div>
  );
};

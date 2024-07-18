import { CardMedia, SxProps } from "@mui/material";
import React, { FC } from "react";

type StyleOperator = "px" | "rem" | "em" | "vw" | "vh" | "%";

type ZoomInCardMediaProps = {
  media?: string;
  width?: number;
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
  heightOperator = "px",
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
          "&:hover": { transform: "scale(1.1)" },
          ...sx,
        }}
      />
    </div>
  );
};

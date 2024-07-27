import { Box, SxProps, useTheme } from "@mui/material";
import { FC } from "react";

import { Typography } from "@/components/base/typography";

export type TagProps = {
  name: string;
  sx?: SxProps;
};

export const Tag: FC<TagProps> = ({ name, sx }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: 5,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.common.white,
        textAlign: "center",
        padding: "0.375em 1em",
        ...sx,
      }}
    >
      <Typography variant="body_x0.875_m">{name}</Typography>
    </Box>
  );
};

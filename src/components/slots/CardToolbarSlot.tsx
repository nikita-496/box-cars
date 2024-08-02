import type { FC } from "react";

import { Box, styled, useTheme } from "@mui/material";

import { Button } from "@/components/base/button";
import { Icon } from "@/components/base/icon";
import { Tag } from "@/components/designSystem/tag/Tag";

const StyledBox = styled(Box)(() => ({
  width: "12px",
  height: "12px",
  fontSize: "12px",
}));

export const CardToolbarSlot: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Tag
        name="Low mileage"
        sx={{ position: "absolute", zIndex: 10, top: 20, left: 10 }}
      />
      <Button
        sx={{
          bgcolor: theme.palette.common.white,
          borderRadius: "50%",
          padding: "0.628em",
          position: "absolute",
          zIndex: 10,
          top: 20,
          right: 10,
          minWidth: "auto",
          "&:hover": {
            bgcolor: theme.palette.common.white,
          },
        }}
      >
        <StyledBox>
          <Icon icon="Bookmark" fontSize="inherit" />
        </StyledBox>
      </Button>
    </>
  );
};

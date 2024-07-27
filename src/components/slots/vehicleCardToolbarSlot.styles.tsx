import { Box, styled } from "@mui/material";

import { Button } from "@/components/base/button";
import { Tag, TagProps } from "@/components/designSystem/tag/Tag";

export const TagStyled = (props: TagProps) => {
  return (
    <Tag
      sx={{
        position: "absolute",
        zIndex: 10,
        top: 20,
        left: 10,
      }}
      {...props}
    />
  );
};

export const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: "50%",
  padding: "0.628em",
  position: "absolute",
  zIndex: 10,
  top: 20,
  right: 10,
  minWidth: "auto",
  transform: "translateY(-1.5px)",
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
}));

export const IconWrapper = styled(Box)(() => ({
  width: "1em",
  height: "1em",
  fontSize: "0.75em",
}));

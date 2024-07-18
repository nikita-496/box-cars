import {
  Radio as MUIRadio,
  RadioProps as MUIRadioProps,
  useTheme,
} from "@mui/material";
import { FC } from "react";

import { Icon } from "@/components/base/icon";

export type RadioProps = MUIRadioProps;

export const Radio: FC<RadioProps> = ({
  disableRipple = true,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <MUIRadio
      disableRipple={disableRipple}
      checkedIcon={<Icon icon="RadioChecked" />}
      sx={{
        "&": {
          padding: 1,
        },
        color: theme.palette.grey[400],
        "&.Mui-checked": {
          color: theme.palette.common.black,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

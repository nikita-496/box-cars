import type { CheckboxProps as MUICheckboxProps } from "@mui/material";
import type { FC } from "react";

import { Checkbox as MUICheckbox } from "@mui/material";

import { Icon } from "@/components/base/icon";

export type CheckboxProps = MUICheckboxProps;

export const Checkbox: FC<CheckboxProps> = ({
  disableRipple = true,
  ...rest
}) => (
  <MUICheckbox
    disableRipple={disableRipple}
    icon={<Icon icon="CheckboxOutline" />}
    sx={(theme) => ({
      "&": {
        padding: 1,
      },

      color: theme.palette.grey[400],
      "&.Mui-checked": {
        color: theme.palette.common.black,
      },
    })}
    {...rest}
  />
);

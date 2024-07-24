import { SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";

import { MenuItem } from "@/components/base/elements";
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from "@/components/base/form";
import { InputLabel, Typography } from "@/components/base/typography";

export type SelectProps = {
  inputLabel?: string;
  menuItems: string[];
  defaultValue?: string;
} & BaseSelectProps<unknown>;

export const Select: FC<SelectProps> = ({
  inputLabel,
  label = "label",
  menuItems,
  defaultValue = "default",
  ...rest
}) => {
  const [menuValue, setMenuValue] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    /* TODO: More meaningful types are needed
      At the moment I haven't found any other solutions for the Select handle:
       
      https://github.com/mui/material-ui/issues/15400

      https://stackoverflow.com/questions/58675993/typescript-react-select-onchange-handler-type-error
    */
    const value = event.target.value as string;
    setMenuValue(value);
  };
  return (
    <>
      {inputLabel && <InputLabel>Select Box</InputLabel>}

      <BaseSelect<unknown>
        value={menuValue}
        onChange={handleChange}
        label={label}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={defaultValue}
        {...rest}
      >
        <MenuItem value={defaultValue} sx={{ display: "none" }}>
          <Typography variant="body_x0.9375_sm" lineHeight="inherit">
            {defaultValue}
          </Typography>
        </MenuItem>
        {menuItems.map((menuItem) => (
          <MenuItem value={menuItem} key={menuItem}>
            <Typography variant="body_x0.9375_sm" lineHeight="inherit">
              {menuItem}
            </Typography>
          </MenuItem>
        ))}
      </BaseSelect>
    </>
  );
};

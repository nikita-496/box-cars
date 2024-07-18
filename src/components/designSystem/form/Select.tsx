import { SelectChangeEvent, SelectProps as MUISelect } from "@mui/material";
import { lighten } from "@mui/system";
import { FC, useState } from "react";

import { MenuItem } from "@/components/base/elements";
import { Select as BaseSelect } from "@/components/base/form";
import { InputLabel, Typography } from "@/components/base/typography";

type SelectProps = MUISelect;

export const Select: FC<SelectProps> = ({ label = "label", ...rest }) => {
  const [age, setAge] = useState("menu");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    /* TODO: More meaningful types are needed
      At the moment I haven't found any other solutions for the Select handle:
       
      https://github.com/mui/material-ui/issues/15400

      https://stackoverflow.com/questions/58675993/typescript-react-select-onchange-handler-type-error
    */
    const value = event.target.value as string;
    setAge(value);
  };
  return (
    <>
      <InputLabel>Select Box</InputLabel>
      <BaseSelect<unknown>
        value={age}
        onChange={handleChange}
        label={label}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue="menu"
        {...rest}
      >
        <MenuItem value="menu">
          <Typography
            variant="body_x0.9375_sm"
            lineHeight="inherit"
            sx={(theme) => ({
              color: lighten(theme.palette.common.black, 0.1),
            })}
          >
            Menu Item 1
          </Typography>
        </MenuItem>
        <MenuItem value="menu2">
          <Typography
            variant="body_x0.9375_sm"
            lineHeight="inherit"
            sx={(theme) => ({
              color: lighten(theme.palette.common.black, 0.1),
            })}
          >
            Menu Item 2
          </Typography>
        </MenuItem>
      </BaseSelect>
    </>
  );
};

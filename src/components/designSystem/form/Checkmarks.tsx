import type { SelectChangeEvent, SelectProps } from "@mui/material";
import type { FC } from "react";

import { styled } from "@mui/material";
import { lighten } from "@mui/system";
import { useState } from "react";

import { MenuItem } from "@/components/base/elements";
import { Select, Checkbox } from "@/components/base/form";
import { InputLabel, Typography } from "@/components/base/typography";

type CheckmarksProps = SelectProps<string[]>;

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: lighten(theme.palette.common.black, 0.1),
}));

export const Checkmarks: FC<CheckmarksProps> = ({ label = "tag", ...rest }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(["Oliver Hansen"]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setCheckedItems(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <InputLabel>Tag</InputLabel>
      <Select<string[]>
        value={checkedItems}
        onChange={handleChange}
        label={label}
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        renderValue={(selected) => selected.join(", ")}
        {...rest}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={checkedItems.indexOf(name) > -1} />
            <StyledTypography variant="body_x0.9375_sm">
              {name}
            </StyledTypography>
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

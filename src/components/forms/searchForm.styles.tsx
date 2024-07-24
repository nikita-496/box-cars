import { Box, BoxProps, styled, useTheme } from "@mui/material";

import { Button, ButtonProps } from "@/components/base/button";
import { Select } from "@/components/designSystem/form";
import { SelectProps } from "@/components/designSystem/form/Select";

export const SearchSelectStyled = styled(Select)(({ theme }) => ({
  padding: "0 1.875em",
  [theme.breakpoints.up("sm")]: {
    "&:not(:last-child):before": {
      content: "''",
      position: "absolute",
      top: "50%",
      right: "0",
      width: "1px",
      height: "36px",
      background: theme.palette.grey[400],
      transform: "translateY(-50%)",
    },
  },

  "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.grey[200],

      [theme.breakpoints.up("sm")]: {
        border: "none",
      },
    },

  ".MuiSelect-select": {
    padding: "1.599em 0",
  },
  '.MuiSelect-select[aria-expanded="true"]': {
    color: theme.palette.primary.main,
  },
  ".MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
    paddingRight: 0,
  },
}));

export const SearchFormStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.common.white,
  borderRadius: 16,
  padding: "1.875em",
  gap: "1.37em",
  position: "relative",
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    borderRadius: 50,
    padding: "0 0.625em",
  },
}));

export const FormButton = (props: ButtonProps) => {
  return (
    <Button
      sx={(theme) => ({
        borderRadius: 4,
        fontSize: (theme) => theme.typography["body_x0.9375_sm"],
        padding: "0.75em 2em 0.668em",
        alignSelf: "center",
        position: "relative",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          position: "absolute",
          right: "10px",
          borderRadius: 12.5,
          width: "auto",
        },
      })}
      {...props}
    />
  );
};

export const IconWrapper = (props: BoxProps) => {
  return (
    <Box
      sx={{
        "&>*:nth-of-type(1)": {
          fontSize: (theme) => theme.typography["body_x0.9375_sm"],
        },
      }}
      {...props}
    />
  );
};

export const SearchFormGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.25em",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: "0",
  },
}));

export const SearchSelect = ({ menuItems, ...props }: SelectProps) => {
  const theme = useTheme();
  return (
    <SearchSelectStyled
      menuItems={menuItems}
      styleMenuProps={{
        ".MuiMenu-paper": {
          boxShadow: "none",
          border: `2px solid`,
          borderColor: `${theme.palette.grey[400]}`,
          borderRadius: 3,
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            borderColor: `${theme.palette.common.white}`,
          },
        },
        ".MuiMenu-list": {
          padding: "0.625em",
        },
        ".MuiMenuItem-root.Mui-selected .MuiTypography-root": {
          color: `${theme.palette.common.black}`,
        },
        ".MuiMenuItem-root": {
          padding: "0.625em 0",
        },
        ".MuiMenuItem-root:not(:last-child)": {
          borderBottom: `1px solid ${theme.palette.grey[400]}`,
        },
        ".MuiMenuItem-root.Mui-selected": {
          bgcolor: "transparent",
          borderRadius: 0,
        },
      }}
      {...props}
    />
  );
};

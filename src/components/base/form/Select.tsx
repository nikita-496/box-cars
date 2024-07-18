import {
  Select as MUISelect,
  SelectProps,
  OutlinedInput,
  useTheme,
} from "@mui/material";

import { ArrowDown } from "@/components/base/icon/icons/ArrowDown";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      transform: "translateY(20px)",
    },
  },
};

export function Select<T>({
  label,
  IconComponent = ArrowDown,
  MenuProps,
  ...rest
}: SelectProps<T>) {
  const theme = useTheme();

  return (
    <MUISelect
      variant="outlined"
      IconComponent={IconComponent}
      input={<OutlinedInput notched name={`${label}`} />}
      label={label}
      MenuProps={{
        sx: {
          ".MuiMenu-paper": {
            boxShadow: "none",
            border: `2px solid ${theme.palette.common.black}`,
            borderRadius: 3,
          },
          ".MuiMenu-list": {
            padding: "1.25em",
            width: "auto !important",
            paddingRight: "1.25em !important",
          },
          ".MuiMenuItem-root": {
            padding: "0 0.95em",
            lineHeight: 2.5,
          },
          ".MuiMenuItem-root:hover": {
            bgcolor: "transparent",
          },
          ".MuiMenuItem-root.Mui-selected": {
            bgcolor: theme.palette.grey[300],
            borderRadius: 3,
          },
          ".MuiMenuItem-root.Mui-selected .MuiTypography-root": {
            color: `${theme.palette.primary.main}`,
          },
        },
        ...menuProps,
        ...MenuProps,
      }}
      sx={{
        color: theme.palette.common.black,
        ".MuiSelect-select": {
          paddingTop: "1.9em",
          paddingBottom: "0.25em",
          fontSize: theme.typography["body_x0.9375_m"],
          fontFamily: '"DM Sans", sans-serif',
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: 3,
          borderWidth: "2px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.common.black,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.common.black,
        },
        "& .MuiSelect-nativeInput": {
          height: "1px",
        },
        "& .MuiSvgIcon-root ": {
          transform: "translateX(-10px)",
        },
      }}
      {...rest}
    />
  );
}

/*export const Select = ({
  label,
  IconComponent = ArrowDown,
  MenuProps,
  ...rest
}: ISelectProps<T>) => {
  const theme = useTheme();
  return (
    <MUISelect
      variant="outlined"
      IconComponent={IconComponent}
      input={<OutlinedInput notched name={`${label}`} />}
      label={label}
      MenuProps={{
        sx: {
          ".MuiMenu-paper": {
            boxShadow: "none",
            border: `2px solid ${theme.palette.common.black}`,
            borderRadius: 3,
          },
          ".MuiMenu-list": {
            padding: "1.25em",
            width: "auto !important",
            paddingRight: "1.25em !important",
          },
          ".MuiMenuItem-root": {
            padding: "0 0.95em",
            lineHeight: 2.5,
          },
          ".MuiMenuItem-root:hover": {
            bgcolor: "transparent",
          },
          ".MuiMenuItem-root.Mui-selected": {
            bgcolor: theme.palette.grey[300],
            borderRadius: 3,
          },
          ".MuiMenuItem-root.Mui-selected .MuiTypography-root": {
            color: `${theme.palette.primary.main}`,
          },
        },
        ...menuProps,
        ...MenuProps,
      }}
      sx={{
        color: theme.palette.common.black,
        ".MuiSelect-select": {
          paddingTop: "1.9em",
          paddingBottom: "0.25em",
          fontSize: theme.typography["body_x0.9375_m"],
          fontFamily: '"DM Sans", sans-serif',
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: 3,
          borderWidth: "2px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.common.black,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.common.black,
        },
        "& .MuiSelect-nativeInput": {
          height: "1px",
        },
        "& .MuiSvgIcon-root ": {
          transform: "translateX(-10px)",
        },
      }}
      {...rest}
    />
  );
};*/

import type { TableCellProps as MUITableCellProps } from "@mui/material";
import type { FC } from "react";

import {
  TableCell as MUITableCell,
  tableCellClasses,
  lighten,
  useTheme,
} from "@mui/material";

export type TableCellProps = MUITableCellProps;

export const TableCell: FC<TableCellProps> = ({ sx, ...rest }) => {
  const theme = useTheme();
  return (
    <MUITableCell
      sx={{
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.grey[300],
          color: theme.palette.primary.main,
        },
        [`&.${tableCellClasses.body}`]: {
          borderBottom: `1px solid ${lighten(theme.palette.grey[400], 0.5)}`,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

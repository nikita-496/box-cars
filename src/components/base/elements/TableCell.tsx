import {
  TableCell as MUITableCell,
  TableCellProps as MUITableCellProps,
  tableCellClasses,
  lighten,
  useTheme,
} from "@mui/material";
import { FC } from "react";

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

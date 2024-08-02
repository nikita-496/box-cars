import type { FC } from "react";

import { createUuid } from "@/core/utils/createUuid";
import {
  Table as MUITable,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";

import { TableCell } from "@/components/base/elements";

export type TableProps = {
  alignFirstCell?: "center" | "left" | "right" | "justify" | "inherit";
  alignSell?: "center" | "left" | "right" | "justify" | "inherit";
};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const headList = [
  {
    id: createUuid(),
    body: "Cell #1",
  },
  {
    id: createUuid(),
    body: "Cell #2",
  },
  {
    id: createUuid(),
    body: "Cell #3",
  },
  {
    id: createUuid(),
    body: "Cell #4",
  },
  {
    id: createUuid(),
    body: "Cell #5",
  },
];

const rows = [
  {
    id: createUuid(),
    body: createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  },
  {
    id: createUuid(),
    body: createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  },
  {
    id: createUuid(),
    body: createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  },
  {
    id: createUuid(),
    body: createData("Eclair", 262, 16.0, 24, 6.0),
  },
  {
    id: createUuid(),
    body: createData("Eclair", 262, 16.0, 24, 6.0),
  },
  {
    id: createUuid(),
    body: createData("Cupcake", 305, 3.7, 67, 4.3),
  },
  {
    id: createUuid(),
    body: createData("Gingerbread", 356, 16.0, 49, 3.9),
  },
];

export const Table: FC<TableProps> = ({
  alignFirstCell = "left",
  alignSell = "right",
}) => {
  return (
    <MUITable>
      <TableHead>
        <TableRow>
          {headList.map((listItem, index) => (
            <TableCell
              align={index !== 0 ? alignSell : alignFirstCell}
              key={listItem.id}
              children={listItem.body}
              sx={{
                borderBottom: "none",
              }}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.body.name}
            </TableCell>
            <TableCell align={alignSell}>{row.body.calories}</TableCell>
            <TableCell align={alignSell}>{row.body.fat}</TableCell>
            <TableCell align={alignSell}>{row.body.carbs}</TableCell>
            <TableCell align={alignSell}>{row.body.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MUITable>
  );
};

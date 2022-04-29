import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasicButtons } from "./Buttons";
import { CardHeader } from "./CardHeader";
import AlbumIcon from "@mui/icons-material/Album";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Bitcoin", "≈ 0 USD", 6.0, 24, 4.0),
  createData("Ethereum", "≈ 0 USD", 9.0, 37, 4.3),
  createData("USD coin", "≈ 0 USD", 16.0, 24, 6.0),
  createData("Tether USD", "≈ 0 USD", 3.7, 67, 4.3),
  createData("Covesting", "≈ 0 USD", 16.0, 49, 3.9),
];

export function BasicTable({ Headerlogo, HeaderText1, HeaderText2 }) {
  return (
    <TableContainer component={Paper}>
      <CardHeader
        Headerlogo={Headerlogo}
        HeaderText1={HeaderText1}
        HeaderText2={HeaderText2}
      />
      <Table
        sx={{ minWidth: 650, backgroundColor: "#2b2b3c" }}
        aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>currency </TableCell>
            <TableCell align='right'>Balance</TableCell>
            <TableCell align='right'>Pending&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                <AlbumIcon /> {row.name}
              </TableCell>
              <TableCell
                align='right'
                sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
                {row.calories}
              </TableCell>
              <TableCell align='right'>
                <BasicButtons
                  text={"-"}
                  button1={"Deposit"}
                  button2={"withdrow"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

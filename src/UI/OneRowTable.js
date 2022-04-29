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

const rows = [createData("Account", "≈ 0 USD", 6.0, 24, 4.0)];

export function OneRowTable({
  Headerlogo,
  HeaderText1,
  HeaderText2,
  nothingToDisplay,
}) {
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
        {!nothingToDisplay ? (
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
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}>
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
        ) : (
          <p style={{ color: "#80808a", padding: " 00 0 0 245px" }}>
            no thing to display
          </p>
        )}
      </Table>
    </TableContainer>
  );
}

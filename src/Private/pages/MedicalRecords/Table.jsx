import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(disease, doctor, type, date, time) {
  return { disease, doctor, type, date, time };
}

const rows = [
  createData("Asthma", "Ram Sharma", "Follow Up", "10 May, 2023", "9: 30 Am"),
  createData("Fever", "Rina Shre", "Consultation", "24 Feb, 2023", "10: 00 AM"),
  createData("Allergy", "Rinah Sen", "Treatment", "06 Sep, 2022", "8: 00 AM"),
  createData("Allergy", "Bell Tod", "Treatment", "17 Aug, 2022", "12: 00 PM"),
  createData("Asthma", "Ham Lal", "Follow Up", "24 Mar, 2022", "11: 00 AM"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Disease</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.disease}</TableCell>
              <TableCell>{row.doctor}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

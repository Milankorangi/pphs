import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(date, time, type, doctor, nurse) {
  return { date, time, type, doctor, nurse };
}

const rows = [
  createData("10 May, 2023", "9: 30 Am", "Follow Up", "Hang Ma", "Assa"),
  createData("24 Feb, 2023", "10: 00 AM", "Consultation", "Phile Torr", "Rina"),
  createData("06 Sep, 2022", "8: 00 AM", "Treatment", "Simon Cel", "Rina"),
  createData("17 Aug, 2022", "12: 00 PM", "Treatment", "Simon Cel", "Rina"),
  createData("24 Mar, 2022", "11: 00 AM", "Follow Up", "Priya Ni", "Sita"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Nurse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.doctor}</TableCell>
              <TableCell>{row.nurse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

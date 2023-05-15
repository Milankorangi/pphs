import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(disease, prescriptions, doctor, date, time) {
  return { disease, prescriptions, doctor, date, time };
}

const rows = [
  createData(
    "Asthma",
    "Consult to ENT Specialist",
    "Ram Sharma",
    "10 May, 2023",
    "9: 30 Am"
  ),
  createData(
    "Fever",
    "Take all medicine and follow up next month",
    "Rina Shre",
    "24 Feb, 2023",
    "10: 00 AM"
  ),
  createData(
    "Allergy",
    "Perform exercise regularly",
    "Rinah Sen",
    "06 Sep, 2022",
    "8: 00 AM"
  ),
  createData(
    "Allergy",
    "Cardic expercise",
    "Bell Tod",
    "17 Aug, 2022",
    "12: 00 PM"
  ),
  createData(
    "Asthma",
    "Insultin 16ml before lunch",
    "Ham Lal",
    "24 Mar, 2022",
    "11: 00 AM"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Disease</TableCell>
            <TableCell>Prescriptions</TableCell>
            <TableCell>Doctor</TableCell>
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
              <TableCell>{row.prescriptions}</TableCell>
              <TableCell>{row.doctor}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

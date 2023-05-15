import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ContactCard({ title, value, icon }) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {icon}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

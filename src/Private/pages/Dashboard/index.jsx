import React from "react";
import { styled } from "@mui/system";
import Card from "./Card";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PaymentIcon from "@mui/icons-material/Payment";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Grid from "@mui/material/Grid";

const MuiGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const lists = [
  {
    id: 1,
    name: "My Account",
    icon: <SwitchAccountIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 3,
    name: "Schedule Appointments",
    icon: <EventBusyIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 2,
    name: "Medical Records",
    icon: <ContentPasteIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 4,
    name: "Refill Prescriptions",
    icon: <EditNoteIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 5,
    name: "Online Payment",
    icon: <PaymentIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 6,
    name: "Interactive Education",
    icon: <CastForEducationIcon sx={{ fontSize: "55px" }} />,
  },
  {
    id: 7,
    name: "Community Resources",
    icon: <Diversity3Icon sx={{ fontSize: "55px" }} />,
  },
];

function Dashboard() {
  return (
    <MuiGrid container spacing={2}>
      {lists.map((list) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card key={list.id} data={list} />
        </Grid>
      ))}
    </MuiGrid>
  );
}

export default Dashboard;

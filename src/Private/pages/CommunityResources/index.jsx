import Grid from "@mui/material/Grid";
import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import SupportGroup from "./SupportGroup";
import HealthAdvocates from "./HealthAdvocates";

import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import HearingOutlinedIcon from "@mui/icons-material/HearingOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";

const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const AdBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  paddingBottom: "8px",
}));

const MuiGrid = styled(Grid)(({ theme }) => ({
  padding: "8px",
  marginBottom: "32px",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
}));

const lists = [
  {
    id: 1,
    name: "Disability Support",
    icon: <AccessibleOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    id: 2,
    name: "Mental Disorder",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    id: 3,
    name: "Cardiac Support",
    icon: <MonitorHeartOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    id: 4,
    name: "ENT Support",
    icon: <HearingOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    id: 5,
    name: "Dermatology Support",
    icon: <TouchAppOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    id: 6,
    name: "Kidney disease",
    icon: <AccessibilityOutlinedIcon sx={{ fontSize: "55px" }} />,
  },
];

const adLists = [
  {
    id: 1,
    name: "Mental Health Advocacy Service",
  },
  {
    id: 2,
    name: "BEING: Mental Health Consumers",
  },
  {
    id: 3,
    name: "Kidney Advocacy Committee & Kidney Outreach Team",
  },
];

function CommunityResources() {
  return (
    <MuiBox>
      <MuiGrid container spacing={1}>
        <Grid item xs={12}>
          <Title>Support Groups</Title>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {lists.map((list) => (
              <Grid key={list?.id} item xs={6} sm={3} md={2}>
                <SupportGroup key={list.id} data={list} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </MuiGrid>
      <AdBox>
        <Title>Health Advocates</Title>
        <Grid container spacing={1}>
          {adLists.map((list) => (
            <Grid key={list?.id} item xs={12}>
              <HealthAdvocates data={list} />
            </Grid>
          ))}
        </Grid>
      </AdBox>
    </MuiBox>
  );
}

export default CommunityResources;

import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import ContactCard from "./ContactCard";

const MuiGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

function Contact() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "22px",
          color: "#000",
          paddingTop: "4px",
          paddingBottom: "16px",
        }}
      >
        Contact
      </Typography>
      <MuiGrid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ContactCard
            title="Address"
            value="400 Kent Street, Sydney"
            icon={<LocationOnIcon sx={{ fontSize: "64px", padding: "12px" }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCard
            title="Mail Us"
            value="info@pphs.com.au"
            icon={
              <MailOutlineIcon sx={{ fontSize: "64px", padding: "12px" }} />
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCard
            title="Call Us"
            value="(02)9292383515"
            icon={<CallIcon sx={{ fontSize: "64px", padding: "12px" }} />}
          />
        </Grid>
      </MuiGrid>
    </Box>
  );
}

export default Contact;

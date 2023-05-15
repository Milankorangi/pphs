import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BasicTable from "./Table";
import PrescriptionRequestForm from "./PrescriptionRequestForm";

const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const MuiGrid = styled(Grid)(({ theme }) => ({
  padding: "8px",
  alignItems: "center",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "70%",
  },
}));

function RefillPrescriptions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MuiBox>
      <Typography
        sx={{
          fontSize: "22px",
          color: "#000",
          paddingTop: "4px",
          paddingBottom: "8px",
        }}
      >
        Prescriptions
      </Typography>
      <MuiGrid container>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <Tab label="Past Prescriptions" />
                <Tab label="Requested Prescriptions" />
              </Tabs>
            </Box>
            <PrescriptionRequestForm />
          </Box>
          <Box sx={{ padding: "8px" }}>
            <BasicTable />
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
      </MuiGrid>
    </MuiBox>
  );
}

export default RefillPrescriptions;

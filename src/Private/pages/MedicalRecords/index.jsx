import Grid from "@mui/material/Grid";
import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BasicTable from "./Table";
import LabReports from "./LabReports";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MedicalRecords() {
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
        Medical Records and Lab Results
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
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Records" {...a11yProps(0)} />
                  <Tab label="Lab Reports" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <BasicTable />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LabReports />
              </TabPanel>
            </Box>
          </Box>
          <Box sx={{ padding: "8px" }}></Box>
        </Grid>
        <Grid item xs={12}></Grid>
      </MuiGrid>
    </MuiBox>
  );
}

export default MedicalRecords;

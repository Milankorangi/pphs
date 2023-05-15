import Grid from "@mui/material/Grid";
import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const MuiGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "#f5f5f5",
}));

const RowBox = styled(Box)(({ theme }) => ({
  padding: "8px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
}));

const Row = ({ title }) => (
  <RowBox>
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextSnippetOutlinedIcon />
      <Typography sx={{ paddingLeft: "8px" }}>{title}</Typography>
    </Box>
    <Box>
      <DeleteOutlineOutlinedIcon />
      <FileDownloadOutlinedIcon />
    </Box>
  </RowBox>
);

function LabReports() {
  return (
    <MuiBox>
      <MuiGrid container spacing={1}>
        <Grid item xs={12}>
          <Row title="Blood Test Report.pdf" />
        </Grid>
        <Grid item xs={12}>
          <Row title="X-Ray report.pdf" />
        </Grid>
        <Grid item xs={12}>
          <Row title="USG Reports.pdf" />
        </Grid>
        <Grid item xs={12}>
          <Row title="Pathology Report.pdf" />
        </Grid>
      </MuiGrid>
    </MuiBox>
  );
}

export default LabReports;

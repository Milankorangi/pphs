import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const RowBox = styled(Box)(({ theme }) => ({
  padding: "8px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
}));

function HealthAdvocates({ data }) {
  return (
    <RowBox>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {data?.id}
        <Typography sx={{ paddingLeft: "8px" }}>{data?.name}</Typography>
      </Box>
      <Box>
        <LocationOnOutlinedIcon />
        <CallOutlinedIcon />
      </Box>
    </RowBox>
  );
}

export default HealthAdvocates;

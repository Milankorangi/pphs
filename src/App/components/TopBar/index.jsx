import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import image from "../../../assets/PPHS.png";

const MuiTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
}));

function TopBar() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "96px",
      }}
    >
      <img src={image} alt="logo" style={{ width: "96px" }} />
      <MuiTypography>Patient Portals for Healthcare Services</MuiTypography>
      <Typography sx={{ color: "#fff" }}>Right</Typography>
    </Container>
  );
}

export default TopBar;

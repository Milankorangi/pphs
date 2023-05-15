import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import image from "../../../assets/PPHS.png";
import moment from "moment";
import { Box } from "@mui/material";

const MuiTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
  textAlign: "center",
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
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <img src={image} alt="logo" style={{ width: "96px" }} />
      <Box
        sx={{
          flex: 1,
        }}
      >
        <MuiTypography>Patient Portals for Healthcare Services</MuiTypography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            display: { xs: "none", xs: "flex" },
            color: "#fff",
          }}
        >
          {/* {moment(new Date()).format("DD MMM, YYYY")} */}R
        </Typography>
      </Box>
    </Container>
  );
}

export default TopBar;

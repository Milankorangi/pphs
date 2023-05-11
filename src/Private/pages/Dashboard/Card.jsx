import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  "&:hover": {
    "& .MuiPaper-root.MuiCard-root": {
      backgroundColor: "#red",
    },
  },
}));

export default function OutlinedCard({ data }) {
  return (
    <Container
      sx={{
        minWidth: 275,
        maxWidth: 300,
        "& .MuiPaper-root.MuiCard-root": {
          minHeight: 160,
          backgroundColor: "#F7F8FD",
          "& .MuiSvgIcon-root": {
            color: "#616161",
          },
          "& .MuiTypography-root": {
            color: "#616161",
          },
          "&:hover": {
            backgroundColor: "#EEEEEE",
            "& .MuiSvgIcon-root": {
              color: "#424242",
            },
            "& .MuiTypography-root": {
              color: "#424242",
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>{data?.icon}</CardContent>
        <CardActions>
          <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
            {data?.name}
          </Typography>
        </CardActions>
      </Card>
    </Container>
  );
}

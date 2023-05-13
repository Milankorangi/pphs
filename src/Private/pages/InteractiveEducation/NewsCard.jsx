import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import moment from "moment";

const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    padding: theme.spacing(0, 1),
  },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  "&:hover": {
    "& .MuiPaper-root.MuiCard-root": {
      backgroundColor: "#red",
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#000",
}));

const Source = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#212121",
}));

const Author = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 400,
  color: "#212121",
}));

export default function NewsCard({ data }) {
  return (
    <Container
      sx={{
        minWidth: 275,
        "& .MuiPaper-root.MuiCard-root": {
          minHeight: 80,
          backgroundColor: "#FDFDFD",
          "& .MuiSvgIcon-root": {
            color: "#616161",
          },
          "&:hover": {
            backgroundColor: "#EFEFEF",
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
      <Link
        to={data?.url}
        target="_blank"
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Title>{data?.title}</Title>
            <Source>{data?.source?.name}</Source>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Author>{data?.author}</Author>
              <Author>
                {moment(data?.publishedAt).format("DD MMM, YYYY")}
              </Author>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Container>
  );
}

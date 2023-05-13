import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const MuiGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

function InteractiveEducation() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=30430daefce9420aae214a1d5332e105"
    )
      .then((response) => response.json())
      .then((data) => setNews(data?.articles));
  }, []);

  if (news.length > 0) {
    return (
      <>
        <Typography
          sx={{
            fontSize: "22px",
            color: "#000",
            paddingTop: "4px",
            paddingBottom: "8px",
          }}
        >
          Australia Health News
        </Typography>
        <MuiGrid container spacing={3}>
          {news &&
            news.map((list) => (
              <Grid item xs={12} sm={6}>
                <NewsCard data={list} />
              </Grid>
            ))}
        </MuiGrid>
        <Typography
          sx={{
            textAlign: "right",
            color: "blue",
            padding: "4px 0px",
            opacity: 0.6,
          }}
        >
          Show all
        </Typography>
      </>
    );
  } else {
    return (
      <>
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#000",
              paddingTop: "4px",
              paddingBottom: "8px",
            }}
          >
            Australia Health News
          </Typography>
          <Typography
            sx={{ textAlign: "center", opacity: 0.8, paddingTop: "8px" }}
          >
            Fetching...
          </Typography>
        </Box>
      </>
    );
  }
}

export default InteractiveEducation;

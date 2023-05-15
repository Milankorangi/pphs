import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const MuiGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "60%",
  },
}));

function MyAccount() {
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
        My Account
      </Typography>
      <MuiGrid container>
        <Grid item xs={12} sm={6}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
              }}
            >
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              />
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Jhon Doe
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, opacity: 0.8 }}
              >
                jhondoe@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "8px",
              }}
            >
              <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                Appointments
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 500, opacity: 0.8 }}
                  >
                    Past
                  </Typography>
                  <Typography
                    sx={{ fontSize: "16px", fontWeight: 600, opacity: 0.9 }}
                  >
                    5
                  </Typography>
                </Box>
                <Divider
                  flexItem="true"
                  orientation="vertical"
                  sx={{ width: "19px" }}
                />
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 500, opacity: 0.8 }}
                  >
                    Upcomming
                  </Typography>
                  <Typography
                    sx={{ fontSize: "16px", fontWeight: 600, opacity: 0.9 }}
                  >
                    2
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: "8px" }}>
            <Box sx={{ paddingBottom: "8px" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Gender
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Male
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Birthday
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Oct 2, 1992
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "8px" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Phone Number
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    0406500666
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Address
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    15 Terry st, Muscot
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "8px" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    City
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Sydney
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Zip Code
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    2045
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "8px" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Member Status
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Active
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 500, opacity: 0.9 }}
                  >
                    Registration Date
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Sep 12, 2022
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </MuiGrid>
    </MuiBox>
  );
}

export default MyAccount;

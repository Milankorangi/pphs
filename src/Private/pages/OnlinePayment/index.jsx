import Grid from "@mui/material/Grid";
import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import BasicTable from "./Table";
import PaymentForm from "./PaymentForm";

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

function OnlinePayment() {
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
        Payment History
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
              <Typography>Last Payments</Typography>
            </Box>
            <PaymentForm />
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

export default OnlinePayment;

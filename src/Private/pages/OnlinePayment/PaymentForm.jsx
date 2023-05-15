import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";

const Healthcares = [
  "St George Hospital",
  "Star Hospital",
  "People Public Hospital",
  "Heart Care Hospital",
];

const types = ["Check Up", "Treatment", "Consultatuon", "Operation"];

const Doctors = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PaymentForm() {
  const [open, setOpen] = React.useState(false);
  const [typeName, setTypeName] = React.useState([]);
  const [hospitalName, setHospitalName] = React.useState([]);
  const [doctorName, setDoctorName] = React.useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypeName(typeof value === "string" ? value.split(",") : value);
  };

  const handleHospitalChange = (event) => {
    const {
      target: { value },
    } = event;
    setHospitalName(typeof value === "string" ? value.split(",") : value);
  };

  const handleDoctorChange = (event) => {
    const {
      target: { value },
    } = event;
    setDoctorName(typeof value === "string" ? value.split(",") : value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Payment
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Make new Payment"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">
                  HealthCare
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={hospitalName}
                  onChange={handleHospitalChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {Healthcares.map((hospital) => (
                    <MenuItem
                      key={hospital}
                      value={hospital}
                      style={getStyles(hospital, hospitalName, theme)}
                    >
                      {hospital}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Doctor</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={doctorName}
                  onChange={handleDoctorChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {Doctors.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, doctorName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="refNumber"
                label="Reference Number"
                name="refNumber"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cardNumber"
                label="Card Number"
                name="cardNumber"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="expiryDate"
                label="Expiry Date"
                name="expiryDate"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="csv"
                label="CSV"
                name="csv"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <Textarea minRows={3} placeholder="Descriptions" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ background: "red", marginBottom: "8px" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ marginRight: "8px", marginBottom: "8px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

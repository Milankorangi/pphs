import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import MainRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;

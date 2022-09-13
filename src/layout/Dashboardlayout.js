import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/Events/Sidebar";
// import Navbar from'../components/Events/Navbar'

const Dashboardlayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        {/* <Navbar/> */}
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default Dashboardlayout;

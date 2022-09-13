import { Box, Typography } from "@mui/material";
import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// const drawerWidth = 250;

const Sidebar = () => {
  return (
    <Box sx={{ height: "100%", borderRight: "1px solid lightgrey" }}>
      <Box
        sx={{
          backgroundColor: "#312D22",
          color: "#FFFFFF",
          paddingTop: "41px",
          paddingLeft: "32px",
          paddingBottom: "41px",
        }}
      >
        <Typography>MIPAD</Typography>
        <Typography variant="subtitle2">Snap it and move</Typography>
      </Box>
      <Box sx={{ marginLeft: "32px", marginTop: "32px" }}>
        <Typography variant="subtitle2" sx={{ color: "#9DA0A7" }}>
          MENU
        </Typography>
        <Box sx={{ display: "flex", color: "#BC8D00", marginTop: "24px" }}>
          <DashboardOutlinedIcon sx={{ marginRight: "16px" }} />
          <Typography>Dashboard</Typography>
        </Box>
      </Box>

      <Box sx={{ color: "#9DA0A7", marginTop: "400px", marginLeft: "32px" }}>
        <Typography variant="subtitle2" sx={{ marginBottom: "24px" }}>
          YOUR ACCOUNT
        </Typography>

        <Box sx={{ display: "flex", marginBottom: "16px" }}>
          <SettingsOutlinedIcon sx={{ marginRight: "16px" }} />
          <Typography variant="subtitle2">Account</Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "16px" }}>
          <SupportOutlinedIcon sx={{ marginRight: "16px" }} />
          <Typography variant="subtitle2">Help & Support</Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "16px" }}>
          <LogoutOutlinedIcon sx={{ marginRight: "16px" }} />
          <Typography variant="subtitle2">Logout</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

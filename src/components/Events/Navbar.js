import { Box } from "@mui/material";
import React from "react";

const Navbar = ({ children }) => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid lightgrey",
        height: "",
        backgroundColor: "#FFFFFF",
      }}
    >
      {children}
    </Box>
  );
};

export default Navbar;

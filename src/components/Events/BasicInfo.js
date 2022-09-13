import { Box, Typography } from "@mui/material";
import React from "react";
import folder from "../../image/folders.svg";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function BasicInfo() {
  return (
    <Box sx={{ marginTop: "32px", marginLeft: "40px" }}>
      <Typography sx={{ color: "#1E0A3C", fontSize: "18px" }}>
        Basic Info
      </Typography>
      <Box
        sx={{
          border: "1px solid lightgrey",
          width: "80%",
          marginTop: "10px",
          paddingLeft: "10px",
          color: "#393A4A",
        }}
      >
        <Typography sx={{ fontSize: "12px" }}>Title of event</Typography>
        <Typography sx={{ fontSize: "14px" }}>Recognition Week 2020</Typography>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          sx={{ color: "#6B6C7E", fontSize: "14px", marginBottom: "10px" }}
        >
          Banner image
        </Typography>
        <Box
          sx={{
            border: "1px dashed lightgrey",
            width: "73%",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <img src={folder} alt="" />
          <br />
          <Typography sx={{ color: "#393A4A" }}>
            Drop your files here or{" "}
            <span style={{ color: "gold" }}>click here</span> to upload
          </Typography>
          {/* <br /> */}
          <Typography sx={{ color: "#6B6C7E", fontSize: "14px" }}>
            Format (jpg, png). Dimension 808px by 413px. Maximum of 5MB
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ color: "#6B6C7E", fontSize: "14px" }}>
          Description
        </Typography>
        <SunEditor
          height="150px"
          width="83%"
          placeholder="Please type here..."
        />
      </Box>
    </Box>
  );
}

export default BasicInfo;

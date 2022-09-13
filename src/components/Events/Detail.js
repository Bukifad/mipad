import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";

function Detail() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleDrawer = () => {
    setToggleDrawer(true);
  };

  return (
    <Box sx={{ marginLeft: "40px", marginTop: "40px" }}>
      <Typography sx={{ color: "#1E0A3C", fontSize: "18px" ,marginBottom:"16px"}}>Days</Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            border: "1px solid lightgrey",
            height: "90px",
            width: "300px",
            padding: "10px",
          }}
        >
          <Box sx={{display:"flex"}}>
            <CalendarTodayOutlinedIcon sx={{ color: "#6B6C7E", }} />
            <Typography  sx={{ color: "#1E0A3C",marginLeft:"16px",fontSize:"14px" }}>
              Date
            </Typography>
            <MoreVertOutlinedIcon sx={{ marginLeft:"65%", color: "#6B6C7E" }} />
          </Box>
          <Typography
            sx={{
              colo: "#9DA0A7",
              fonstSize: "18px",
              marginBottom: "8px",
              marginLeft: "35px",
            }}
          >
            Aug 23, 2020
          </Typography>
          <Typography
           
            sx={{ colo: "#393A4A", marginLeft: "35px",fontSize:"14px" }}
          >
            Sessions: 0
          </Typography>
        </Box>

        <Box
          onClick={handleDrawer}
          sx={{
            border: "1px dashed lightgrey",
            height: "90px",
            width: "300px",
            marginLeft: "25px",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <AddOutlinedIcon sx={{ color: "#6B6C7E" }} />
          <br />
          <Typography sx={{ color: "#393A4A",fontSize:"14px" }}>
            Add New Day
          </Typography>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box sx={{ width: "380px", height: "900px" }}>
          <Box
            sx={{
              borderBottom: "1px solid lightgrey",
              display: "flex",
              height: "60px",
              marginTop: "24px",
            }}
          >
            <Typography
              sx={{ color: "#1E0A3C", fontSize: "18px", marginLeft: "24px" }}
            >
              New Day
            </Typography>
            <CloseIcon
              sx={{ marginLeft: "230px", color: "#9DA0A7" }}
              onClick={() => setToggleDrawer(false)}
            />
          </Box>
          <form style={{ marginTop: "20px", marginLeft: "25px" }}>
            <TextField
              sx={{ width: "300px" }}
              //  label="Title"
              required
              placeholder="Title"
              multiline
              //  fullWidth
            />
            <Box>
              <TextField
                sx={{ width: "300px", marginTop: "20px " }}
                select
                label="Date "
                value={Date}
                placeholder="Date"
              ></TextField>
            </Box>
          </form>
          <Box sx={{ marginTop: "90%", marginLeft: "50%" }}>
            <Button
              sx={{
                background: "#FFF9E6",
                borderRadius: "4px",
                color: "#BC8D00",
                marginRight: "10px",
                textTransform: 'unset !important' 
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => setToggleDrawer(false)}
              sx={{
                background: "#FDC10E",
                borderRadius: "4px",
                color: "#312D22",
                textTransform: 'unset !important'
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Detail;

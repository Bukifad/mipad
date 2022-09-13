import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function Ticket() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleDrawer = () => {
    setToggleDrawer(true);
  };
  return (
    <Box sx={{ marginLeft: "40px", marginTop: "32px" }}>
      <Box sx={{ display: "flex", marginBottom: "16px" }}>
        <Typography sx={{color:"#1E0A3C"}}>Ticket</Typography>
        <Typography  sx={{ marginLeft: "48%",color:"#6B6C7E" ,fontSize:"14px"}}>
          2 of 3 Tickets created • Event capaicty: 835
        </Typography>
      </Box>

      <Box sx={{ border: "1px solid #E5E5EA", height: "80px", width: "738px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <DragHandleOutlinedIcon
              sx={{ marginTop: "18px", marginLeft: "8px", color: "#9DA0A7" }}
            />
            <Box sx={{ marginLeft: "30px" }}>
              <Typography sx={{ color: "#393A4A" }}>
                General Admission
              </Typography>

              <Typography sx={{ color: "#6B6C7E", fontSize:"14px" }}>
                On sale • Ends Oct 1, 2021 at 7:00 PM
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: "#6B6C7E",fontSize:"14px" }}>0/345</Typography>
          <Typography sx={{ color: "#6B6C7E",fontSize:"14px" }}>Free</Typography>
          <MoreVertOutlinedIcon sx={{ color: "#6B6C7E" }} />
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px solid #E5E5EA",
          height: "80px",
          width: "738px",
          marginTop: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <DragHandleOutlinedIcon
              sx={{ marginTop: "18px", marginLeft: "8px", color: "#9DA0A7" }}
            />
            <Box sx={{ marginLeft: "30px" }}>
              <Typography sx={{ color: "#393A4A" }}>
                General Admission
              </Typography>

              <Typography sx={{ color: "#6B6C7E" ,fontSize:"14px"}}>
                On sale • Ends Oct 1, 2021 at 7:00 PM
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: "#6B6C7E",fontSize:"14px" }}>0/345</Typography>
          <Typography sx={{ color: "#6B6C7E" ,fontSize:"14px"}}>Free</Typography>
          <MoreVertOutlinedIcon sx={{ color: "#6B6C7E", }} />
        </Box>
      </Box>

      <Box
        onClick={handleDrawer}
        sx={{
          border: "1px dashed #E5E5EA",
          height: "100px",
          width: "738px",
          marginTop: "8px",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        <AddOutlinedIcon />
        <Typography sx={{fontSize:"14px",color:"#393A4A"}}>Add Ticket</Typography>
      </Box>

      <Drawer
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box sx={{ width: "655px", height: "900px" }}>
          <Box
            sx={{
              borderBottom: "1px solid lightgrey",
              display: "flex",
              height: "50px",
              marginTop: "24px",
            }}
          >
            <Typography
              sx={{ color: "#1E0A3C", fontSize: "18px", marginLeft: "24px" }}
            >
              New Ticket
            </Typography>
            <CloseIcon
              sx={{ marginLeft: "500px", color: "#9DA0A7" }}
              onClick={() => setToggleDrawer(false)}
            />
          </Box>

          <Box sx={{ marginLeft: "25px" }}>
            <Box sx={{ display: "flex", marginTop: "24px" }}>
              <Button
                sx={{
                  border: "1px solid #FDC10E ",
                  width: "50px",
                  height: "30px",
                  textAlign: "center ",
                  padding: "5px",
                  backgroundColor: "#FFF9E6",
                  borderRadius: "4px",
                  color: "#BC8D00",
                  textTransform: 'unset !important'
                }}
              >
                Paid
              </Button>
              <Button
                sx={{
                  border: "1px solid #E5E5EA  ",
                  width: "50px",
                  height: "30px",
                  textAlign: "center ",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  marginLeft: "16px",
                  color: "#6B6C7E",
                  textTransform: 'unset !important'
                }}
              >
                Free
              </Button>
            </Box>

            <form style={{ marginTop: "20px" }}>
              <TextField
                sx={{ width: "600px", marginBottom: "15px" }}
                label="Name"
               
                placeholder="General Admission"
                multiline
                fullWidth
              />
              <TextField
                sx={{ width: "600px", marginBottom: "15px" }}
                label="Availability"
                
                placeholder="544"
                multiline
                fullWidth
              />
              <TextField
                sx={{ width: "600px", marginBottom: "15px" }}
                label="Price"
                
                placeholder="$544"
                multiline
                fullWidth
              />

              <Box>
                <TextField
                  sx={{ width: "600px", marginBottom: "15px" }}
                  select
                  label="When are tickets available? "
                  value={Date}
                  placeholder="Date"
                ></TextField>
              </Box>

              <Box sx={{}}>
                <TextField
                  sx={{ width: "300px" }}
                 
                  label="Sales Start"
                  placeholder="Aug 23, 2021"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  
                />
                <TextField
                  sx={{
                    width: "300px",
                    marginBottom: "15px",
                    marginLeft: "5px",
                  }}
                  select
                  label="Start Time "
                  value={Date}
                  placeholder="Time"
                ></TextField>
              </Box>
              <Box sx={{}}>
                <TextField
                  sx={{ width: "300px" }}
                 
                  label="Sales End"
                  placeholder="Sep 30, 2021"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
              
                />
                <TextField
                  sx={{
                    width: "300px",
                    marginBottom: "15px",
                    marginLeft: "5px",
                  }}
                  select
                  label="End Time"
                  value={Date}
                  placeholder="Time"
                  ></TextField>
                  </Box>
            </form>
            <Typography variant="substitue1">Ticket Type</Typography>

            <Box
              sx={{ display: "flex", marginTop: "24px", marginBottom: "16px" }}
            >
              <Button
                sx={{
                  border: "1px solid #FDC10E ",
                  width: "60px",
                  height: "30px",
                  textAlign: "center ",
                  padding: "5px",
                  backgroundColor: "#FFF9E6",
                  borderRadius: "4px",
                  color: "#BC8D00", 
                  textTransform: 'unset !important'

                }}
              >
                Event
              </Button>
              <Button
                sx={{
                  border: "1px solid #E5E5EA  ",
                  width: "50px",
                  height: "30px",
                  textAlign: "center ",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  marginLeft: "16px",
                  color: "#6B6C7E",
                  textTransform: 'unset !important'
                }}
              >
                Day
              </Button>
              <Button
                sx={{
                  border: "1px solid #E5E5EA  ",
                  width: "70px",
                  height: "30px",
                  textAlign: "center ",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  marginLeft: "16px",
                  color: "#6B6C7E",
                  textTransform: 'unset !important'
                }}
              >
                Session
              </Button>
            </Box>

            <Typography sx={{color:"#6B6C7E"}}>
              Help people in the area discover your event and let attendees know
              where to
              <br /> show up.
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "40%",
              marginLeft: "70%",
              backgroundColor: "#F5F7FA",
            }}
          >
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

export default Ticket;

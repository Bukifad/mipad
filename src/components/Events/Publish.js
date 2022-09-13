import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";


function publish() {
  return (
    <Box sx={{ marginLeft: "40px", marginTop: "30px" }}>
      <Typography sx={{ color: "#1E0A3C", marginBottom: "16px " }}>
        Publish
      </Typography>

      <Box
        sx={{
          border: "1px solid #E5E5EA",
          width: "710px",
          height: "300px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            border: "1px solid #E5E5EA",
            backgroundColor: "#E5E5EA",
            width: "250px",
            height: "300px",
          }}
        ></Box>

        <Box sx={{ marginLeft: "24px", marginTop: "16px" }}>
          <Typography sx={{ color: "#1E0A3C", fontSize: "18px" }}>
            Testing How It Will Look Like. And Yeah, It's A Two <br /> Way Data
            Binding.
          </Typography>
          <Box sx={{ display: "flex", color: "#6B6C7E", marginTop: "8px" }}>
            <CalendarTodayOutlinedIcon />
            <Typography sx={{marginLeft:"8px" ,fontSize:"12px"}}>Friday, October 1, 2021 at 7:00 PM WAT</Typography>
          </Box>
          <Box sx={{ display: "flex", color: "#6B6C7E", marginTop: "8px" }}>
            <FmdGoodOutlinedIcon />
            <Typography sx={{marginLeft:"8px",fontSize:"12px"}}>7 Omo Ighodalo Street, Lagos, LA 105102</Typography>
          </Box>
          <Box sx={{ display: "flex", color: "#6B6C7E", marginTop: "8px" }}>
            <ConfirmationNumberOutlinedIcon />
            <Typography sx={{marginLeft:"8px",fontSize:"12px"}}>Free - N12,000.00</Typography>
          </Box>

          <Typography
            sx={{ color: "#6B6C7E", fontSize: "12px", marginTop: "16px" }}
          >
            Gastropub chillwave lumbersexual umami lyft. Poke austin direct
            trade,
            <br /> marfa raclette letterpress actually.
          </Typography>

          <Button
            endIcon={<ModeEditOutlineOutlinedIcon />}
            sx={{
              backgroundColor: "#FFFFFF",
              boxShadow: "inset 0px 1px 0px #E5E5EA",
              width: "300px",
              height: "40px",
              color: "#BC8D00",
              marginTop: "16px",
              textTransform: 'unset !important'
            }}
          >
            {" "}
            Edit
          </Button>
        </Box>
      </Box>

      <Typography sx={{ marginTop: "24px", color: "#1E0A3C" }}>
        When should we publish the event?
      </Typography>
      <RadioGroup
        sx={{ marginTop: "16px", color: "#6B6C7E" }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Publish now"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Publish now"
          control={
            <Radio
              sx={{
                color: "#FDC10E",
                "&.Mui-checked": {
                  color: "#FDC10E",
                },
              }}
            />
          }
          label="Publish now"
        />
        <FormControlLabel
          value=""
          control={
            <Radio
              sx={{
                color: "#FDC10E",
                "&.Mui-checked": {
                  color: "#FDC10E",
                },
              }}
            />
          }
          label="Schedule for later"
        />
      </RadioGroup>

      <Box sx={{ marginTop: "16px" }}>
        <TextField
          sx={{ width: "200px" }}
          
          label="Date"
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
            width: "200px",
            marginBottom: "15px",
            marginLeft: "5px",
          }}
          select
          label="Time"
          value={Date}
          placeholder="1:00 PM"
        ></TextField>
      </Box>
    </Box>
  );
}

export default publish;

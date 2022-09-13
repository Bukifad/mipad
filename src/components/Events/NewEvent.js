import React from "react";
import { Box, Typography, Grid, Button,Modal,  } from "@mui/material";
import DashboardLayout from "../../layout/Dashboardlayout";
import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import Detail from "./Detail";
import Ticket from "./Ticket";
import Pricing from "./Pricing";
import Publish from "./Publish";

import animation from "../../image/animation.svg"
import { Link } from "react-router-dom";
 

const stepper = ["Basic info", "Details", "Ticket", "Pricing Table", "Publish",];

function NewEvent() {
  const [list, setList] = React.useState(1);
const[open,setOpen] =React.useState(false)
  const handleClick = (id) => {
    setList(id + 1);
  };
  const handleNext = () => {
    setList(list + 1);
  };
  const handlePublish=()=>{
setOpen(true)
  };
  const handleClose=()=>{
setOpen(false)
  };

  return (
    <DashboardLayout>
      <Navbar>
        <Box sx={{ marginTop: "24px", marginLeft: "40px", height: "104px" }}>
          <Typography variant="subtitle2" sx={{ color: "#6B6C7E" }}>
            Event List
          </Typography>

          <Typography variant="h5" sx={{ color: "#1E0A3C" }}>
            New Event
          </Typography>
        </Box>
      </Navbar>
      <Grid container>
        <Grid item xs={9}>
          {list === 1 ? (
            <BasicInfo />
          ) : list === 2 ? (
            <Detail />
          ) : list === 3 ? (
            <Ticket />
          ) : list === 4 ? (
            <Pricing />
          ) : list === 5 ? (
            <Publish />
          ) : (
            <BasicInfo/>
          )}
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ borderLeft: "1px solid lightgrey", height: "600px" }}
        >
          <Typography
            sx={{
              color: "#6B6C7E",
              borderBottom: "1px solid lightgrey",
              padding: "24px 24px 16px",
            }}
          >
            Manage event
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "#1E0A3C", fontSize: "18px", padding: "15px" }}
          >
            Testing How It Will Look Like.
            <br /> And Yeah, It's A Two Way Data Binding.
          </Typography>
          <Box>
            {stepper.map((stepper, index) => (
              <Box
                onClick={() => handleClick(index)}
                sx={{
                  display: "flex",
                  borderLeft: index + 1 === list ? "3px solid #FDC10E" : "",
                  backgroundColor: index + 1 === list ? "#FFF9E6" : "",
                  padding: "12px 12px 16px 24px",
                }}
              >
                <span
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#1E0A3C",
                    color: "#F5F7FA",
                    borderRadius: "50%",
                    padding: "2px",
                   
                    display: "inline-block",
                    textAlign: "center",
                    marginRight: "16px",
                  }}
                >
                  {index + 1}
                </span>
                <Typography variant="subtitle2">{stepper}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        sx={{
          borderTop: "1px solid lightgrey",
          height: "100px",
          paddingTop: "16px",
          paddingRight: "400px",
        }}
      >
        <Grid item>
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
        </Grid>
        <Grid item>
          <Button
            onClick={list === 5 ? handlePublish : handleNext }
            sx={{
              background: "#FDC10E",
              borderRadius: "4px",
              color: "#312D22",
              textTransform: 'unset !important'
            }}
          >
            {list === 5 ? "Publish":"save&continue"}
          </Button>
        </Grid>
      </Grid>
      
      <Modal  open={open} onClose={handleClose} sx={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <Box sx={{width:"580px",height:"450px",backgroundColor:"#FAFAFA",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
borderRadius: "10px",}}>
  <Box sx={{textAlign:"center", marginTop:"30px"}}>
        <img src={animation} alt=""  />
        <Typography sx={{marginTop:"20px", fontSize:"26px",color:"#272833"}}>Event Published Successfully</Typography>
        <Typography sx={{marginTop:"24px",fontSize:"16px" ,color:"#6B6C7E" }}>The event will now be available for the public to  <br/>register.</Typography>
        <Box sx={{marginTop:"50px"}}>
        <Button
              sx={{
                background: "#FFF9E6",
                borderRadius: "4px",
                color: "#BC8D00",
                marginRight: "10px",
                textTransform: 'unset !important'
              }}
            >
             Create new event
            </Button>
            <Link to="/Dashboardlist" style={{textDecoration:"none"}} >
            <Button
              // onClick={() => setToggleDrawer(false)}
              sx={{
                background: "#FDC10E",
                borderRadius: "4px",
                color: "#312D22",
                textTransform: 'unset !important'
              }}
            >
            Back to dashboard
            </Button>
            </Link>

        </Box>

        </Box>

        </Box>
      </Modal>

    </DashboardLayout>
  );
}

export default NewEvent;

import {
  Box,
  Button,
  InputBase,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardLayout from "../../layout/Dashboardlayout";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import leave from "../../image/leave.svg";
import { Link } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "#F8F7FA ",
  "&:hover": {},
  marginRight: "8px",
  width: "250px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  // justifyContent: 'center',
  color: "#A7A9BC",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#A7A9BC",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

function Dashboard() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
    <DashboardLayout>
      <Navbar>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginTop: "24px", marginLeft: "40px" }}>
            <Typography variant="subtitle2" sx={{ color: "#6B6C7E" }}>
              Overview
            </Typography>

            <Typography variant="h5" sx={{ color: "#1E0A3C" }}>
              Event List
            </Typography>
          </Box>

          <Box sx={{ display: "flex", marginRight: "67px", marginTop: "31px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search event"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            
            <Link to="/new-event" style={{textDecoration:"none"}} >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#FDC10E",
                "&:hover": {
                  backgroundColor: "#FDC10E",
                },
                color: "#312D22",
                textTransform: 'unset !important'
              }}
            >
              New Event
            </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ marginLeft: "40px", width: "70%" }}>
          <Tabs onChange={handleChange} value={value} sx={{ color: "#FDC10E" }}>
            <Tab
              label="Ongoing"
              variant="subtitle2"
              sx={{ textTransform: "none", color: "#1E0A3C" }}
            />
            <Tab
              label="Upcoming"
              sx={{ textTransform: "none", color: "#9DA0A7" }}
            />
            <Tab
              label="Past"
              sx={{ textTransform: "none", color: "#9DA0A7" }}
            />
            <Tab
              label="Draft"
              sx={{ textTransform: "none", color: "#9DA0A7" }}
            />
            <Tab label="All" sx={{ textTransform: "none", color: "#9DA0A7" }} />
          </Tabs>
        </Box>
      </Navbar>

      <Box
        component="main"
        sx={{
          textAlign: "center",
          position: "absolute",
          left: "692px",
          top: "340px",
        }}
      >
        {/* <Toolbar /> */}

        <Box>
          <img src={leave} alt="" />
          <Typography variant="subtitle2">No Events yet</Typography>
          <Typography variant="subtitle2">
            Events that have been created will <br /> show here.
          </Typography>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;

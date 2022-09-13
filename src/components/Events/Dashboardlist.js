import {
  Box,
  Button,
  Chip,
  InputBase,
  Paper,
  styled,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardLayout from "../../layout/Dashboardlayout";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

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
  
  color: "#A7A9BC",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#A7A9BC",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const columns = [
  { id: "name", label: "Name" },
  { id: "StartDate", label: "Start date" },
  {
    id: "EndDate",
    label: "End date",
    
    align: "right",
  
  },
  {
    id: "Location",
    label: "Location",
   
    align: "right",
  
  },
  {
    id: "Capacity",
    label: "Capacity",
    
    align: "right",
   
  },
  {
    id: "Status",
    label: "Status",
  
    align: "right",
    key: "status",
    
  },
];

function createData(name, StartDate, EndDate, Location, Capacity, status) {
  // const density = population / size;
  return {
    name,
    StartDate,
    EndDate,
    Location,
    Capacity,
    Status: (
      <Chip
        label={
          status === "Ongoing"
            ? "Ongoing"
            : status === "Past"
            ? "Past"
            : "Upcoming"
        }
        size="small"
        sx={{
          backgroundColor:
            status === "Ongoing"
              ? "#D4F7DC"
              : status === "Past"
              ? "#E5E5EA"
              : "#F0F5FF",
          color:
            status === "Ongoing"
              ? "#15692A"
              : status === "Past"
              ? "#1E0A3C"
              : "#0050C8",
          borderRadius: "4px",
        }}
      />
    ),
  };
}

const rows = [
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Lagos, NG",
    "23,940",
    "Ongoing"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Online",
    "23,940",
    "Past"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Lagos, NG",
    "23,940",
    "Upcoming"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Online",
    "23,940",
    "Upcoming"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Lagos, NG",
    "23,940",
    "Ongoing"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Online",
    "23,940",
    "Ongoing"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Lagos, NG",
    "23,940",
    "Past"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Lagos, NG",
    "23,940",
    "Ongoing"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Online",
    "23,940",
    "Upcoming"
  ),
  createData(
    "Recognition Week 2021",
    "Aug 23, 2021",
    "Aug 27, 2021",
    "Online",
    "23,940",
    "Upcoming"
  ),
];

function Dashboardlist() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

            
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#FDC10E",
                "&:hover": {
                  backgroundColor: "#FDC10E",
                },
                color: "#312D22",
                textTransform: "unset !important",
              }}
            >
              New Event
            </Button>
           
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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: " 0px 40px",
        }}
      >
        <Typography sx={{color:'#6B6C7E'}}>Showing 11 to 20 of 95 entries</Typography>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      <Paper sx={{ width: "93%", marginLeft: "40px",  }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: "#F5F5F5", color: "#6B6C7E" }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ color: "#393A4A" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </DashboardLayout>
  );
}

export default Dashboardlist;

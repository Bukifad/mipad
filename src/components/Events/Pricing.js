import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function Pricing() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box sx={{ marginLeft: "40px", marginTop: "32px" }}>
      <Typography sx={{ color: "#1E0A3C" }}>Pricing Table</Typography>

      <Box sx={{ display: "flex", marginTop: "16px" }}>
        <Typography sx={{ marginTop: "22%", color: "#6B6C7E" }}>
          Packages{" "}
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            border: "1px solid #E5E5EA ",
            padding: "10px",
            width: "130px",
            height: "180px",
            color: "#6B6C7E",
            fontSize: "12px",
            marginLeft: "158px",
            marginRight: "9px",
          }}
        >
          <FormControlLabel
            value="1"
            control={
              <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="price"
                sx={{
                  color: "#FDC10E",
                  marginLeft:"20px",
                  "&.Mui-checked": {
                    color: "#FDC10E",
                  },
                }}
              />
            } 
              
            label=" "
          />
          <Box>
            <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
              Recommend
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>TICKET TYPE</Typography>
            <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
              General Admission Second
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>₦10,000.00</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid #E5E5EA ",
            padding: "10px",
            width: "130px",
            height: "180px",
            color: "#6B6C7E",
            marginRight: "9px",
          }}
        >
          <FormControlLabel
            value="2"
            control={
              <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="price"
                sx={{
                  color: "#FDC10E",
                  marginLeft:"20px",
                  "&.Mui-checked": {
                    color: "#FDC10E",
                  },
                }}
              />
            }
            label=" "
          />
          <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
            Recommend
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>TICKET TYPE</Typography>
          <Typography sx={{ fontSize: "12px", marginBottom: "35px" }}>
            Premium
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>₦50,000.00</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid #E5E5EA ",
            padding: "10px",
            width: "130px",
            height: "180px",
            color: "#6B6C7E",
          }}
        >
          <FormControlLabel
            value="3"
            control={
              <Radio
              checked={selectedValue === 'c'}
              onChange={handleChange}
              value="c"
              name="price"
                sx={{
                  color: "#FDC10E",
                  marginLeft:"20px",
                  "&.Mui-checked": {
                    color: "#FDC10E",
                  },
                }}
              />
            }
            label=" "
          />
          <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
            Recommend
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>TICKET TYPE</Typography>
          <Typography sx={{ fontSize: "12px", marginBottom: "35px" }}>
            Executive
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>₦100,000.00</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px solid #E5E5EA",
          width: "700px",
          height: "250px",
          marginTop: "7px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #E5E5EA",
            height: "50px",
            marginTop: "8px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #E5E5EA",
              display: "flex",
              width: "320px",
              height: "25px",
              marginLeft: "8px",
            }}
          >
            <Typography
              sx={{ color: "#6B6C7E", marginLeft: "9px", fontSize: "14px" }}
            >
              Curated content across 30+ topics
            </Typography>
            <Typography
              sx={{ marginLeft: "24px", color: "#9DA0A7", fontSize: "14px" }}
            >
              32 / 32
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "sapce-between",
              marginLeft: "50px",
            }}
          >
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },

              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #E5E5EA",
            height: "40px",
            marginTop: "8px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #E5E5EA",
              display: "flex",
              width: "320px",
              height: "25px",
              marginLeft: "8px",
            }}
          >
            <Typography
              sx={{ color: "#6B6C7E", marginLeft: "9px", fontSize: "14px" }}
            >
              Curated content across 30+ topics
            </Typography>
            <Typography
              sx={{ marginLeft: "24px", color: "#9DA0A7", fontSize: "14px" }}
            >
              28 / 32
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "sapce-between",
              marginLeft: "50px",
            }}
          >
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #E5E5EA",
            height: "40px",
            marginTop: "8px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #E5E5EA",
              display: "flex",
              width: "320px",
              height: "25px",
              marginLeft: "8px",
            }}
          >
            <Typography
              sx={{ color: "#6B6C7E", marginLeft: "9px", fontSize: "14px" }}
            >
              Curated content across 30+ topics
            </Typography>
            <Typography
              sx={{ marginLeft: "24px", color: "#9DA0A7", fontSize: "14px" }}
            >
              31/ 32
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "sapce-between",
              marginLeft: "50px",
            }}
          >
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #E5E5EA",
            height: "40px",
            marginTop: "8px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #E5E5EA",
              display: "flex",
              width: "320px",
              height: "25px",
              marginLeft: "8px",
            }}
          >
            <Typography
              sx={{ color: "#CDCED9", marginLeft: "9px", fontSize: "14px" }}
            >
              Type here
            </Typography>

            <Typography
              sx={{ marginLeft: "175px", color: "#9DA0A7", fontSize: "14px" }}
            >
              31/ 32
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "sapce-between",
              marginLeft: "50px",
            }}
          >
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },
              }}
            ></Checkbox>
            <Checkbox
              sx={{
                borderRadius: "5px",
                width: "24px",
                height: "24px",
                marginLeft: "100px",
                color: "#E5E5EA",
                "&.Mui-checked": {
                  color: "blue",
                  border:"1px solid gold"
                },

              }}
            ></Checkbox>
          </Box>
        </Box>

        <Button
          startIcon={<AddOutlinedIcon />}
          sx={{
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#FFFFFF" },
            color: "#BC8D00",
            marginLeft:'40%',
            alignItems: "center",
            textTransform: 'unset !important'
          }}
        >
          New Row
        </Button>
      </Box>
    </Box>
  );
}

export default Pricing;

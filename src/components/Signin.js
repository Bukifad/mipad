import React, { useState } from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import image from "../image/background_img.svg";
import google from "../image/google.svg";
// import { makeStyles } from "@mui/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FDC10E",
  "&:hover": {
    backgroundColor: "#FDC10E",
  },
  // width: "312px",

  borderRadius: "4px",
  color: "#312D22",
}));
const StyleCard = styled(Card)(({ theme }) => ({
  // padding: 20,
  // height: "500px",
  width: "100%",
  maxWidth: "360px",
  margin: "24px auto",
}));
const Styleinput = styled(TextField)(({ theme }) => ({
  // width: "330px",
  height: "46px",
  marginTop: "10px",
  marginBottom: "10px",
  // border: "2px solid red"
}));
const Styleline = styled(Box)(({ theme }) => ({
  border: "1px solid #A7A9BC",
  width: "135px",
  height: "0px",
  marginTop: "26px",
  marginBottom: "26px",
}));

const Stylegoogle = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFF9E6",
  "&:hover": {
    backgroundColor: "#FFF9E6",
  },
  borderRadius: "4px",
  color: "#BC8D00",
  // width: "312px",
  marginBottom: "16px",
  marginRight: "26px",
}));
const Stylecondition = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "#393A4A",
}));
const Signin = () => {
  // const classes = useStyles();

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (Email === "") {
      setEmailError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }

    console.log(Email, password);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${image})`,
        height: "100%",
        maxHeight: "100vh",
        width: "100%",
        overflow: "scroll",
        padding: "50px 0",
      }}
    >
      {/* <Box sx={{ marginTop: "144px" }}> */}
      <Box
        sx={{
          // position: "absolute",
          // top: "8%",
          // left: "50%",
          // transform: `translate(-50%, -50%)`,
          textAlign: "center",
          marginBottom: "24px",
          color: "#FFF9E6",
        }}
      >
        <Typography>EventEdge</Typography>
        <Typography sx={{ marginBottom: "50px", marginTop: "" }}>
          A one-stop gateway to a more engaging and <br /> convenient community
          management...
        </Typography>
      </Box>

      {/* <img src={image} alt="" /> */}
      <Box>
        <Grid>
          <StyleCard elevation={10}>
            <CardContent
              sx={{
                borderBottom: "2px solid lightgrey ",
                px: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#393A4A",
                }}
                variant="subtitle2"
              >
                Sign in with your email
              </Typography>
            </CardContent>
            <CardContent sx={{ p: 3 }}>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Styleinput
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email address"
                  required
                  placeholder="shezvar45@email.com"
                  error={EmailError}
                  multiline
                  fullWidth
                />
                <Styleinput
                  onChange={(e) => setPassword(e.target.value)}
                  label="password"
                  required
                  type="password"
                  placeholder="password"
                  error={passwordError}
                  multiline
                  fullWidth
                />
                <Link to="/forgot-password" style={{textDecoration:"none"}}>
                  <Typography
                    sx={{
                      color: "#7C7666",
                      marginTop: "7px",
                      marginBottom: "16px",
                      fontSize: "14px",
                     
                    }}
                    variant="subtitle2"
                  >
                    Forgot password?
                  </Typography>
                </Link>
                <ColorButton type="submit" variant="contained" fullWidth>
                  Sign in
                </ColorButton>
              </form>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0px",
                  gap: "16px",
                }}
              >
                <Styleline></Styleline>
                <Typography
                  sx={{
                    color: "#9DA0A7",
                    marginTop: "26px",
                    marginBottom: "26px",
                  }}
                  variant="subtitle2"
                >
                  or
                </Typography>
                <Styleline></Styleline>
              </Box>

              <Stylegoogle variant="contained" fullWidth>
                <img src={google} alt="" style={{ marginRight: "26px" }} />
                Sign in with Google
              </Stylegoogle>
              <Stylecondition>
                By signing in, you are agreeing to our Terms & Conditions <br />{" "}
                and Privacy Policy
              </Stylecondition>
            </CardContent>
          </StyleCard>
        </Grid>
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default Signin;

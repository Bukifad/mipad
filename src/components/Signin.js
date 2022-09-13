import React, { useState } from "react";
// import axios from "axios";
import { useMutation } from "react-query";
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
import Api from "../utils/Api";
import { AuthService } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FDC10E",
  "&:hover": {
    backgroundColor: "#FDC10E",
  },

  borderRadius: "4px",
  color: "#312D22",
}));
const StyleCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "380px",
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
  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const login = () => {
    return Api.post("/api/v1/auth/login/", {
      email: email,
      password: password,
    });
  };
  const mutation = useMutation(AuthService.login, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.data?.access);
      localStorage.setItem("refreshToken", data.data?.refresh);
      navigate("/Dashboard" )
    },
  });


  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }

    console.log(email, password);
    const params = {
      email,
      password,
    };
    login();
    mutation.mutate(params);
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
      <Box
        sx={{
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
                  label="email address"
                  required
                  placeholder="shezvar45@email.com"
                  error={emailError}
                  // multiline
                  fullWidth
                />
                <Styleinput
                  onChange={(e) => setPassword(e.target.value)}
                  label="password"
                  required
                  type="password"
                  placeholder="password"
                  error={passwordError}
                  // multiline
                  fullWidth
                />
                <Link to="/forgot-password" style={{ textDecoration: "none" }}>
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
                {/* <Link to="/Dashboard" style={{ textDecoration: "none" }}> */}
                  <ColorButton  type="submit" variant="contained" fullWidth>
                    Sign in
                  </ColorButton>
                {/* </Link> */}
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
                By signing in, you are agreeing to our{" "}
                <span style={{ color: "gold" }}>
                  {" "}
                  Terms & Conditions <br /> and Privacy Policy
                </span>
              </Stylecondition>
            </CardContent>
          </StyleCard>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signin;

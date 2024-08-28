import "../Css/Login.css";
import { Link } from "react-router-dom";
import loginImage from "../Assets/auth-banner-img-2x.103aea7cb86228dea0cf.png";
import PhotoIcon from "@mui/icons-material/Photo";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import FormControl from "@mui/material/FormControl";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Login = () => {
  const [number, setNumber] = useState("");
  // const format = {
  //   value: "+91",
  //   label: "+91",
  // };
  return (
    <>
      <div className="d-flex login-page" style={{}}>
        <div className="left-login">
          <div className="d-flex brand">
            <PhotoIcon sx={{ color: "blue" }} />
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "auto",
                cursor: "pointer",
              }}
            >
              <h5>JioPhotos</h5>
            </Link>
          </div>
          <div className="login-text ">
            <div className="heading">
              <h2>Start your journey with us</h2>
            </div>
            <div className="login-body">
              <h6>
                Join us for seamless pre and post-event content management.
                Create, customise, and effortlessly share event Photos.
              </h6>
            </div>
          </div>
          <div className="login-image container">
            <img src={loginImage} alt="Login"></img>
          </div>
        </div>
        <div className="right-login">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 484,
                height: 572,
                borderRadius: 5,
              },
            }}
          >
            <Paper elevation={10}>
              <div className="right-text">
                <div className="right-heading-text">
                  <h2>Sign in to JioPhotos</h2>
                </div>
                <div className="right-body-text">
                  <h6>
                    Capture, organize, and share your events' memories
                    effortlessly.
                  </h6>
                </div>
                <div className="login-card">
                  <TextField
                    id="phone-number"
                    label="Phone number"
                    variant="standard"
                    fullWidth
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    defaultValue={"+91 "}
                    error={number.length !== 14}
                    helperText={number.length !== 14 ? "Invalid Number" : ""}
                  />
                </div>
                <div className="login-button">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: "50px",
                      height: "56px",
                      width: "387px",
                    }}
                    disabled={number.length !== 14}
                  >
                    GET OTP
                  </Button>
                </div>
                <div className="privacy">
                  By continuing, you agree to our <Link>Terms of Service</Link>{" "}
                  and Privacy & Legal Policy
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;

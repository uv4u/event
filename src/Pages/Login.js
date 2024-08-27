import "../Css/Login.css";
import loginImage from "../Assets/auth-banner-img-2x.103aea7cb86228dea0cf.png";
import PhotoIcon from "@mui/icons-material/Photo";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-">
        <div className="left-login">
          <div className="d-flex brand">
            <PhotoIcon sx={{ color: "blue" }} />
            <h5>JioPhotos</h5>
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
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;

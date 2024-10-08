import Photo from "../Assets/weddingPhoto.jpeg";
import "../Css/Homepage.css";
import invite from "../Assets/invite.png";
import facedetect from "../Assets/facedetect.png";
import share from "../Assets/share.jpg";
import rightImage from "../Assets/ai-gallery.d261bc4670c28851d898.png";
import collage from "../Assets/digital-album.bfcd4b87dd424055b425.png";
import { Link } from "react-router-dom";

//MUI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

//Components
import MyCarousel from "../Components/Carousel";
import SimplePaper from "../Components/PieChart";

const Homepage = () => {
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + Photo + ")",
  };

  return (
    <div>
      <div className="homepage-div">
        <div className="dash-image" style={sectionStyle}>
          <div className="container section-1">
            <h1>Seamless sharing,</h1>
            <h1>endless memories!</h1>
            <h6>
              Send invites and share event pictures securely and conveniently
              using AI
            </h6>
          </div>
        </div>
        <div className="section-2">
          <div className="d-flex justify-content-around event">
            <h2>Your events, our canvas</h2>
          </div>
          <div className="d-flex justify-content-around">
            <h6 className="about">
              JioPhotos makes it easy to create, invite, and share your media!
              No more photo-chasing after events! You can access all your event
              media in one place.
            </h6>
          </div>
        </div>
        <div className="section-3">
          <div className="container-img">
            <div
              className="img1"
              style={{ position: "relative", width: "fit-content" }}
            >
              <div style={{ height: "100%" }}>
                <img
                  src={invite}
                  alt="Invite"
                  style={{ display: "block" }}
                ></img>
              </div>
              <div className="text-div">
                <h2>Instant Invites</h2>
                <h6 className="text-under-heading">
                  Share specific photos with event attendees effortlessly.
                </h6>
              </div>
            </div>
            <div
              className="img1"
              style={{ position: "relative", width: "fit-content" }}
            >
              <div style={{ height: "100%" }}>
                <img
                  src={facedetect}
                  alt="facedetect"
                  style={{ display: "block" }}
                ></img>
              </div>
              <div className="text-div">
                <h2>Intelligent Segregation</h2>
                <h6 className="text-under-heading">
                  Share specific photos with event attendees effortlessly.
                </h6>
              </div>
            </div>
            <div
              className="img1"
              style={{ position: "relative", width: "fit-content" }}
            >
              <div className="back" style={{ height: "100%" }}>
                <img src={share} alt="share" style={{ display: "block" }}></img>
              </div>
              <div className="text-div">
                <h2>Easy Sharing</h2>
                <h6 className="text-under-heading">
                  Share specific photos with event attendees effortlessly.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="section-4 event">
          <div className="">
            <div className="d-flex align-items-top justify-content-around">
              <div className="left">
                <h1>JioPhotos AI Gallery</h1>
                <h4>
                  Find your media with JioPhotos' intelligent facial sorting.
                  Share precious moments with friends and family, and enjoy
                  accessing your media anytime, anywhere, on connected devices.
                </h4>
              </div>
              <div className="right">
                <img src={rightImage} alt="collage"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="section-5">
          <div>
            <div className="section-5-h2">
              <h2>How it works</h2>
            </div>
            <MyCarousel />
          </div>
        </div>
        <div className="section-6 event">
          <div className="container">
            <div className="d-flex justify-content-around align-items-top">
              <div className="section-6-left">
                <h1>Event Dashboard</h1>
                <h6>
                  Gain insights into event attendance by identifying attendees,
                  non-attendees, and tentative attendees.
                </h6>
              </div>
              <div className="section-6-right">
                <SimplePaper />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div className="section-6-1-left">
                <img src={collage}></img>
              </div>
              <div className="section-6-1-right">
                <h1>Your Digital Album</h1>
                <h6>
                  Break free from old photo-sharing ways. Customize your photos
                  by incorporating stylish frames and share with your guests.
                </h6>
              </div>
            </div>
            <div className="section-6-2">
              <Link to="/signin">
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: "blue", borderRadius: 10 }}
                >
                  Sign in now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="section-7">
          <div>
            <h6>Connect with us</h6>
            <div className="d-flex justify-content-center">
              <Stack direction="row">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <XIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </div>
            <div className="section-7-download">
              <h6>Download JioPhotos</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

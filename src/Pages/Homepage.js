import Photo from "../Assets/weddingPhoto.jpeg";
import "../Css/Homepage.css";
import invite from "../Assets/invite.png";
import facedetect from "../Assets/facedetect.png";
import share from "../Assets/share.jpg";
import rightImage from "../Assets/ai-gallery.d261bc4670c28851d898.png";

//Components
import MyCarousel from "../Components/Carousel";

const Homepage = () => {
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + Photo + ")",
  };

  return (
    <div>
      <div className="dash-image" style={sectionStyle}>
        <div className="container ">
          <h1>Seamless sharing,</h1>
          <h1>endless memories!</h1>
          <p>
            Send invites and share event pictures securely and conveniently
            using AI
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="d-flex justify-content-around event">
          <h2>Your events, our canvas</h2>
        </div>
        <div className="d-flex justify-content-around">
          <h6 className="about">
            JioPhotos makes it easy to create, invite, and share your media! No
            more photo-chasing after events! You can access all your event media
            in one place.
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
              <img src={invite} alt="Invite" style={{ display: "block" }}></img>
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
            <div style={{ height: "100%" }}>
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
        <div className="container">
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
    </div>
  );
};

export default Homepage;

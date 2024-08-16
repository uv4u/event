import Photo from "../Assets/weddingPhoto.jpeg";
import "./Homepage.css";

const Homepage = () => {
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + Photo + ")",
  };

  return (
    <div>
      <div className="dash-image" style={sectionStyle}>
        <div className="container">
          <h1 className="dash">Seamless sharing,</h1>
          <h1>endless memories!</h1>
          <p>
            Send invites and share event pictures securely and conveniently
            using AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

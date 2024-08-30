import Nav2 from "../Components/Navbar2";
import "../Css/Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Nav2 />
      <div className="dashboard-screen">
        <div className="dash-board-card">
          <div className="dash-animation">
            {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}
            <lottie-player
              src="https://lottie.host/13a4de42-f677-4d50-ae30-0502df708b3b/h5BbH9o4WN.json"
              background="##ffffff"
              speed="0.1"
              style={{ width: "250px", height: "250px" }}
              loop
              autoplay
              direction="1"
              mode="slow"
            ></lottie-player>
          </div>
          <div className="dash-heading">No Events</div>
          <div className="dash-body">
            Get started by creating an event, inviting guests and sharing
            photos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

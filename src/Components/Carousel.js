import "../Css/Carousel.css";
import Tile1 from "../Assets/mockup_1.fd4c785a2d001c5b613a.png";
import Tile2 from "../Assets/mockup_2_changed.b65758855a05cc79c47f.png";
import Tile3 from "../Assets/mockup_3.ba2768ff15984b1cec11.png";
import Tile4 from "../Assets/mockup_4.10765e2674d53c70e665.png";
import Tile5 from "../Assets/mockup_5.8505cb3776573689730b.png";
const MyCarousel = () => {
  return (
    <div className="container-custom">
      <div
        id="carouselExampleFade"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active slide-1">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <img src={Tile1}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <p className="section-5-step-icon">Step 1</p>
                  <h1 className="section-5-heading">
                    Create and customise your event
                  </h1>
                  <h6 className="section-5-description">
                    Effortlessly add event details and invite guests with just a
                    few clicks.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <img src={Tile2}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <p className="section-5-step-icon">Step 2</p>
                  <h1 className="section-5-heading">
                    Capture basic details for a personalised experience
                  </h1>
                  <h6 className="section-5-description">
                    Ask guests to upload selfies and details, ensuring a
                    personalized and engaging photo-sharing experience.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <img src={Tile3}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <p className="section-5-step-icon">Step 3</p>
                  <h1 className="section-5-heading">
                    Effortless photo segregation
                  </h1>
                  <h6 className="section-5-description">
                    Upload event photos easily and use advanced facial
                    recognition to automatically sort guests' faces based on
                    their selfies.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <img src={Tile4}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <p className="section-5-step-icon">Step 4</p>
                  <h1 className="section-5-heading">
                    Personalized access for guests
                  </h1>
                  <h6 className="section-5-description">
                    Enhance guest experiences by offering tailored access
                    levels, such as Full Access and Face Access, as well as
                    permissions to Upload or Download media.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <img src={Tile5}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <p className="section-5-step-icon">Step 5</p>
                  <h1 className="section-5-heading">
                    Easy photo viewing for guests
                  </h1>
                  <h6 className="section-5-description">
                    Guests can conveniently view and cherish event memories
                    through a user-friendly interface.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;

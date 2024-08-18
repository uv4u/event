import Tile1 from "../Assets/mockup_1.fd4c785a2d001c5b613a.png";
const MyCarousel = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container">
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
            <div className="d-flex justify-content-between">
              <div className="left">
                <img src={Tile1}></img>
              </div>
              <div className="right">
                <div className="section-5-right">
                  <h1>Create and customise your event</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
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

import "../Scss/navbar.scss";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";
import PhotoIcon from "@mui/icons-material/Photo";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div className="d-flex align-items-center" style={{ gap: "5px" }}>
              <PhotoIcon />
              JioPhotos
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse d-flex flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active nav-color"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  How it works
                </a>
              </li>

              <li className="nav-item">
                <Link to="/signin">
                  <a
                    className="nav-link active"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Sign in
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

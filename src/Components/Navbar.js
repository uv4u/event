import "../Css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">JioPhotos</a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

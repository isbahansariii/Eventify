import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/navbar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-custom fixed-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand ps-3 d-flex align-items-center"
          to="/home"
          onClick={() => window.scrollTo(0, 0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 512 512"
          >
            <path
              fill="#001F3F"
              d="M.4 256C.4 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.1 255 2.1C114 2.1 .4 116 .4 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"
            />
          </svg>
          <span className="ms-2 brand-name">Eventify</span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end pe-5 ">
            <li
              className={`nav-item me-3 ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li
              className={`nav-item me-3 ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li
              className={`nav-item me-3 ${
                location.pathname === "/review" ? "active" : ""
              }`}
            >
              <Link className="nav-link" aria-current="page" to="/review">
                Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

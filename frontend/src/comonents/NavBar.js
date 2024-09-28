import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function NavBar() {
  const islogedin = !!cookies.get("jwt");
  const logout=()=>{
    cookies.remove("jwt");
    localStorage.removeItem("user_id");
  }
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="favicon.ico" alt="dr" />
            Naryani
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Our Store
                </Link>
              </li> */}
            </ul>
            <div className="d-flex">
              <Link to="/bookappointment">
                <button className="btn btn-outline-danger mx-2">
                  Book an Appointment
                </button>
              </Link>
              {islogedin ? (
                <>
                  <div class="nav-item dropdown logedin">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-person-fill me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      Welcome
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/">
                          My Bookings
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          class="dropdown-item logout"
                          to="/login"
                         onClick={logout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn btn-outline-primary mx-2">
                      <i class="bi bi-person-fill"></i>&nbsp;Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-outline-primary">
                      <i class="bi bi-person-fill"></i>&nbsp;Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

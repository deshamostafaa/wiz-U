import React from "react";
import { Link, NavLink } from "react-router-dom";

//import scss file
import "./navbar.scss";

// MUI
import AccountMenu from "../Meun/AccountMenu";

const Navbar = ({ userData, logOut, currentUser }) => {
  return (
    <nav className="navbar container-fluid position-fixed navbar-expand-lg">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1 className="logo">Wiz U</h1>
        </Link>
      </div>
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
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav text-end  mb-2 mb-lg-0">
          {userData ? (
            <>
              <AccountMenu currentUser={currentUser} logOut={logOut} />
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

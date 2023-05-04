import React from "react";
import { Link } from "react-router-dom";

export default function LandingPageNav() {
  return (
    <div>
      <nav className="navbar bg-primary" style={{ position: "fixed",height: "5em", top: 0, width: "100%" }}>
        <h6>MARTHA PET STORE</h6>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/services">OUR SERVICES</Link>
          <Link className="navbar-brand" to="help">HOW TO HELP</Link>
          <Link className="navbar-brand" to="/about">ABOUT</Link>
          <Link className="navbar-brand" to="/register">
            Register
          </Link>
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

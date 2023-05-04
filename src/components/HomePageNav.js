import React from "react";
import { Link } from "react-router-dom";

export default function HomeNavBar() {
  return (
    <div>
      <nav
        className="navbar bg-primary"
        style={{ position: "fixed", height: "4em", top: 0, width: "100%" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Home</Link>

          <Link  className="navbar-brand" to="/pets">PET</Link>
          <Link className="navbar-brand" to="/">LOGOUT</Link>
          <form class="d-flex" role="search">
            <input
              style={{height: "2em"}}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

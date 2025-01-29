import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Logo"
            style={{ height: "30px" }}
          />
          <span className="ms-2 fw-bold" style={{ color: "#FF385C" }}>
            airbnb
          </span>
        </a>

        {/* Center Section */}
        <div
          className="rounded-pill border d-flex justify-content-between align-items-center px-3 py-2 mx-auto"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <div className="d-flex flex-column text-center me-3">
            <span className="fw-bold">Where</span>
            <span className="text-muted">Search destinations</span>
          </div>
          <div className="d-flex flex-column text-center me-3">
            <span className="fw-bold">Check in</span>
            <span className="text-muted">Add dates</span>
          </div>
          <div className="d-flex flex-column text-center me-3">
            <span className="fw-bold">Check out</span>
            <span className="text-muted">Add dates</span>
          </div>
          <div className="d-flex flex-column text-center me-3">
            <span className="fw-bold">Who</span>
            <span className="text-muted">Add guests</span>
          </div>
          <button
            className="btn rounded-circle text-white"
            style={{ backgroundColor: "#FF385C" }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* User Section */}
        <div className="d-flex align-items-center">
          <a href="#" className="me-3 text-dark">Airbnb your home</a>
          <i className="bi bi-globe me-3"></i>
          <button className="btn border rounded-pill d-flex align-items-center">
            <i className="bi bi-list me-2"></i>
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        {/* Page content goes here */}
        <h1>Welcome to Airbnb!</h1>
      </main>
    </div>
  );
}
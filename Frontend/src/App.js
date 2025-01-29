import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Card Component
const Card = ({ imageSrc, title }) => {
  return (
    <div className="card shadow-sm">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

// Navbar Component
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
          {/* <span className="ms-2 fw-bold" style={{ color: "#FF385C" }}>
            airbnb
          </span> */}
        </a>

        {/* Stay and Experience Links */}
        <div className="d-flex flex-column mx-auto">
          <div className="d-flex justify-content-center mb-2">
            <a
              href="#"
              className="me-3 text-dark fw-bold text-decoration-none"
              style={{
                borderBottom: "2px solid rgb(83, 56, 255)",
                paddingBottom: "4px",
              }}
            >
              Stays
            </a>
            <a
              href="#"
              className="text-dark text-decoration-none"
              style={{ paddingBottom: "4px" }}
            >
              Experiences
            </a>
          </div>

          {/* Center Section */}
          <div
            className="rounded-pill border d-flex justify-content-between align-items-center px-3 py-2"
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
        </div>

        {/* User Section */}
        <div className="d-flex align-items-center">
          <a href="#" className="me-3 text-dark">
            Airbnb your home
          </a>
          <i
            className="bi bi-globe me-3"
            style={{
              fontSize: "1.2rem",
              color: "#6c757d",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          ></i>
          <button className="btn border rounded-pill d-flex align-items-center">
            <i className="bi bi-list me-2"></i>
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Filters Component
const Filters = () => {
  const categories = [
    { label: "Amazing views", icon: "bi bi-binoculars" },
    { label: "Icons", icon: "bi bi-star" },
    { label: "Amazing pools", icon: "bi bi-water" },
    { label: "Farms", icon: "bi bi-tree" },
    { label: "Containers", icon: "bi bi-box" },
    { label: "Islands", icon: "bi bi-sunset" },
    { label: "OMG!", icon: "bi bi-emoji-smile" },
    { label: "Historical", icon: "bi bi-bank" },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex overflow-auto">
          {categories.map((item, index) => (
            <div
              key={index}
              className="text-center me-4"
              style={{ minWidth: "100px" }}
            >
              <div
                className="rounded-circle bg-light mx-auto mb-2 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className={item.icon} style={{ fontSize: "1.5rem" }}></i>
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-3">Filters</button>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="toggleSwitch"
            />
            <label className="form-check-label" htmlFor="toggleSwitch">
              Display total before taxes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page
export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <Filters />
      <main className="container mt-5">
        {/* Section 1 */}
        <section className="row mb-5">
        <div className="col-md-4">
  <Card
    imageSrc="https://a0.muscache.com/im/pictures/1d9c40a4-385c-4682-8f98-03a5c8cdd5bd.jpg?im_w=1200&im_format=avif"
    title="Gokarna India"
    price="1200"
    location="Madrid"
  />

 
</div>

<div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_format=avif&im_w=720"
              title="Image 3"
              description="This is a description for image 3."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/miso/Hosting-918014835783096365/original/732fecd3-1655-43c5-a0a9-8ec0f1a51b92.jpeg?im_w=720&im_format=avif"
              title="Image 3"
              description="This is a description for image 3."
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="row">
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/miso/Hosting-999965835542869363/original/a8c37576-c5ab-4e43-b7ed-0b168b3f58a3.jpeg?im_w=720&im_format=avif"
              title="Karjat India"
              description="This is a description for image 6."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/miso/Hosting-1075063790242427927/original/00c5202a-87e2-41a8-9ca3-a554c9fe1933.jpeg?im_w=720&im_format=avif"
              title="Nerul India"
              description="This is a description for image 7."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/miso/Hosting-1274282079086788168/original/daaf1aea-3366-4e5b-8f71-4ea2169f56ae.jpeg?im_w=720&im_format=avif"
              title="Verca India"
              description="This is a description for image 8."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MzQ4ODg0MDk3MjEyMjg4Ng%3D%3D/original/0d4ddc44-3d47-43d3-a7dc-dfe2ebf1fd14.jpeg?im_w=720&im_format=avif"
              title="Vagator India"
              description="This is a description for image 9."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/0e2a8d2e-8082-43d8-a8ec-323a53b3c03b.jpg?im_w=720&im_format=avif"
              title="Magagoan India"
              description="This is a description for image 10."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://a0.muscache.com/im/pictures/ff2becb9-8bd7-4fc6-b634-20daa1c0088e.jpg?im_w=720&im_format=avif"
              title="Raigad India"
              description="This is a description for image 11."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
